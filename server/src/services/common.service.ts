import { Params } from '@strapi/database/dist/entity-manager/types';
import { UID } from '@strapi/strapi';
import {
  first,
  get,
  isNil,
  isObject,
  isString,
  omit as filterItem,
  parseInt,
  uniq,
} from 'lodash';
import { isProfane, replaceProfanities } from 'no-profanity';
import { Id, PathTo, PathValue, RelatedEntity, StrapiContext } from '../@types';
import { CommentsPluginConfig } from '../config';
import { ContentTypesUUIDs } from '../content-types';
import { getCommentRepository, getStoreRepository } from '../repositories';
import { getOrderBy } from '../repositories/utils';
import { CONFIG_PARAMS } from '../utils/constants';
import PluginError from '../utils/PluginError';
import { client as clientValidator } from '../validators/api';
import { Comment, CommentRelated, CommentWithRelated } from '../validators/repositories';
import { Pagination } from '../validators/repositories/utils';
import { buildAuthorModel, buildNestedStructure, filterOurResolvedReports, getRelatedGroups } from './utils/functions';
import {isPersianProfane} from "../utils/isPersianProfane";


const PAGE_SIZE = 10;
const REQUIRED_FIELDS = ['id'];


type ParsedRelation = {
  uid: UID.ContentType;
  relatedId: string;
};


type Created = PathTo<CommentsPluginConfig>;

const commonService = ({ strapi }: StrapiContext) => ({
  async getConfig<T extends Created>(prop?: T, defaultValue?: PathValue<CommentsPluginConfig, T>, useLocal = false): Promise<PathValue<CommentsPluginConfig, T>> {
    const storeRepository = getStoreRepository(strapi);
    const config = await storeRepository.getConfig();
    if (prop && !useLocal) {
      return get(config, prop, defaultValue) as PathValue<CommentsPluginConfig, T>;
    }
    if (useLocal) {
      return storeRepository.getLocalConfig(prop, defaultValue) as PathValue<CommentsPluginConfig, T>;
    }
    return config as PathValue<CommentsPluginConfig, T>;
  },
  parseRelationString(relation: `${string}::${string}.${string}:${string}` | string): ParsedRelation {
    const [uid, relatedStringId] = getRelatedGroups(relation);
    return { uid: uid as UID.ContentType, relatedId: relatedStringId };
  },
  isValidUserContext<T extends { id?: string | number }>(user?: T): boolean {
    return user ? user.id != undefined : true;
  },

  sanitizeCommentEntity(entity: Comment | CommentWithRelated, blockedAuthors: string[], omitProps: Array<keyof Comment> = [], populate: any = {}): Comment {
    const fieldsToPopulate = Array.isArray(populate) ? populate : Object.keys(populate || {});
    return filterItem({
      ...buildAuthorModel(
        {
          ...entity,
          threadOf: isObject(entity.threadOf) ? buildAuthorModel(entity.threadOf, blockedAuthors, fieldsToPopulate) : entity.threadOf,
        },
        blockedAuthors,
        fieldsToPopulate,
      ),
    }, omitProps) as Comment;
  },

  // Find comments in the flat structure
  async findAllFlat({
    fields,
    limit,
    skip,
    sort,
    populate,
    omit: baseOmit = [],
    isAdmin = false,
    pagination,
    filters = {},
    locale,
  }: clientValidator.FindAllFlatSchema, relatedEntity?: any): Promise<{ data: Array<CommentWithRelated | Comment>, pagination?: Pagination }> {
    const omit = baseOmit.filter((field) => !REQUIRED_FIELDS.includes(field));
    const defaultSelect = (['id', 'related', 'createdAt'] as const).filter((field) => !omit.includes(field));

    const populateClause: clientValidator.FindAllFlatSchema['populate'] = {
      authorUser: true,
      ...(isObject(populate) ? populate : {}),
    };
    const doNotPopulateAuthor = isAdmin ? [] : await this.getConfig(CONFIG_PARAMS.AUTHOR_BLOCKED_PROPS, []);
    const [operator, direction] = getOrderBy(sort);
    const fieldsQuery = {
      orderBy: { [operator]: direction },
      select: Array.isArray(fields)
        ? uniq([...fields, defaultSelect].flat())
        : fields,
    };

    const params = {
      where: {
        approvalStatus: 'APPROVED',
        ...filters,
        ...(locale ? { locale } : {}),
      },
      populate: populateClause,
      ...fieldsQuery,
      pageSize: pagination?.pageSize || limit || PAGE_SIZE,
      page: pagination?.page || (skip ? Math.floor(skip / limit) : 1) || 1,
    };

    const { results: entries, pagination: resultPaginationData } = await getCommentRepository(strapi).findWithCount(params);

    const entriesWithThreads = await Promise.all(
      entries.map(async (_) => {
        const { results, pagination: { total } } = await getCommentRepository(strapi)
        .findWithCount({
          where: {
            threadOf: _.id,
          },
        });
        return {
          id: _.id,
          itemsInTread: total,
          firstThreadItemId: first(results)?.id,
        };
      }),
    );
    const relatedEntities = omit.includes('related') ? [] : relatedEntity !== null ? [relatedEntity] : await this.findRelatedEntitiesFor([...entries]);
    const hasRelatedEntitiesToMap = relatedEntities.filter((_: RelatedEntity) => _).length > 0;

    const result = entries.map((_) => {
      const threadedItem = entriesWithThreads.find((item) => item.id === _.id);
      const parsedThreadOf = 'threadOf' in filters ? (isString(filters.threadOf) ? parseInt(filters.threadOf) : filters.threadOf) : null;

      let authorUserPopulate = {};
      if (isObject(populateClause?.authorUser)) {
        authorUserPopulate = 'populate' in populateClause.authorUser ? (populateClause.authorUser.populate) : populateClause.authorUser;
      }

      const primitiveThreadOf = typeof parsedThreadOf === 'number' ? parsedThreadOf : null;

      return this.sanitizeCommentEntity(
        {
          ..._,
          threadOf: primitiveThreadOf || _.threadOf,
          gotThread: (threadedItem?.itemsInTread || 0) > 0,
          threadFirstItemId: threadedItem?.firstThreadItemId,
        },
        doNotPopulateAuthor,
        omit as Array<keyof Comment>,
        authorUserPopulate,
      );
    });

    return {
      data: hasRelatedEntitiesToMap ? result.map((_) => this.mergeRelatedEntityTo(_, relatedEntities)) : result,
      pagination: {
        total: (resultPaginationData as any)?.total ?? 0,
        page: params.page,
        pageSize: params.pageSize,
      },
    };
  },

  // Find comments and create relations tree structure
  async findAllInHierarchy(
    {
      filters,
      populate,
      sort,
      fields,
      startingFromId,
      dropBlockedThreads,
      isAdmin = false,
      omit = [],
      locale,
      limit,
      pagination,
    }: clientValidator.FindAllInHierarchyValidatorSchema,
    relatedEntity?: any,
  ) {
    // Fetch the current paginated slice (usually roots)
    const rootFilters = {
      ...filterItem(filters || {}, ['threadOf']) as any,
      threadOf: typeof startingFromId === 'number' ? startingFromId : null,
    } as any;
    const entities = await this.findAllFlat({ filters: rootFilters, populate, sort, fields, isAdmin, omit, locale, limit, pagination }, relatedEntity);

    // Ensure all descendants of the visible slice are included to build a complete tree
    const byId = new Map<number, any>();
    for (const item of entities.data) {
      byId.set((item as any).id, item);
    }

    // Seed parent ids
    let currentParentIds: number[];
    if (typeof startingFromId === 'number') {
      currentParentIds = [startingFromId];
    } else {
      currentParentIds = entities.data
        .filter((_: any) => _ && ((_.threadOf ?? null) === null))
        .map((_: any) => _.id);
    }

    // Iteratively fetch children for the visible parents until no more descendants are found
    // We intentionally do not paginate children to avoid missing replies
    while (currentParentIds.length) {
      const uniqueParentIds = Array.from(new Set(currentParentIds));
      // Build child-safe filters: preserve relation and basic constraints, drop root-level boolean logic
      const baseChildFilters: any = {
        related: (filters as any)?.related,
        approvalStatus: 'APPROVED',
        ...(locale ? { locale } : {}),
      };
      const childrenBatches = await Promise.all(
        uniqueParentIds.map((parentId) => this.findAllFlat({
          filters: {
            ...baseChildFilters,
            threadOf: parentId as any,
          },
          populate,
          sort,
          fields,
          isAdmin,
          omit,
          locale,
          limit: Number.MAX_SAFE_INTEGER,
        } as any, relatedEntity)),
      );

      const newChildren: any[] = childrenBatches.flatMap((_) => _.data);
      const unseenChildren = newChildren.filter((child) => !byId.has((child as any).id));
      unseenChildren.forEach((child) => byId.set((child as any).id, child));
      currentParentIds = unseenChildren.map((c: any) => c.id);
    }

    // De-duplicate entities by id to avoid cycles/overflow during tree build
    const allEntities = Array.from(byId.values()).filter((e, idx, arr) => arr.findIndex((x: any) => x.id === (e as any).id) === idx);

    const [op, dir] = getOrderBy(sort);
    const createdKey = op || 'createdAt';
    const toTime = (v: any) => (v ? new Date(v).getTime() : 0);
    const tree = buildNestedStructure(
      allEntities as any,
      startingFromId,
      'threadOf',
      dropBlockedThreads,
      false,
    );

    const sortChildren = (nodes: any[], isRoot = false) => {
      if (!isRoot) {
        nodes.sort((a, b) => (toTime(a?.[createdKey]) - toTime(b?.[createdKey])) * (dir === 'asc' ? 1 : -1));
      }
      nodes.forEach((n) => {
        if (Array.isArray(n.children) && n.children.length) sortChildren(n.children, false);
      });
      return nodes;
    };

    // Compute thread activity (max createdAt in subtree) for root ordering
    const getMaxActivityMs = (node: any): number => {
      const selfMs = toTime(node?.[createdKey]);
      const children = Array.isArray(node.children) ? node.children : [];
      let maxMs = selfMs;
      for (const c of children) {
        const childMs = getMaxActivityMs(c);
        if (childMs > maxMs) maxMs = childMs;
      }
      return maxMs;
    };

    // Roots ordered by activity: DESC = newest activity first, ASC = oldest activity first
    const sortedTree = sortChildren(
      (tree as any).sort((a: any, b: any) => {
        const aMs = getMaxActivityMs(a);
        const bMs = getMaxActivityMs(b);
        return (aMs - bMs) * (dir === 'asc' ? 1 : -1);
      }),
      true,
    );

    return {
      data: sortedTree,
      // Keep pagination of roots slice
      pagination: entities?.pagination,
    };
  },

  // Find single comment
  async findOne(criteria: Partial<Params['where']>) {
    const entity = await getCommentRepository(strapi).findOne({
      where: criteria,
      populate: {
        reports: true,
        authorUser: true,
      },
    });
    if (!entity) {
      throw new PluginError(400, 'Comment does not exist. Check your payload please.');
    }
    const doNotPopulateAuthor: Array<string> = await this.getConfig(CONFIG_PARAMS.AUTHOR_BLOCKED_PROPS, []);
    const item = this.sanitizeCommentEntity(entity, doNotPopulateAuthor);
    return filterOurResolvedReports(item);
  },

  async findMany(criteria: Params) {
    return getCommentRepository(strapi).findMany(criteria);
  },

  async updateComment(criteria: Partial<Params['where']>, data: Partial<Comment>) {
    return getCommentRepository(strapi).update({ where: criteria, data });
  },

  // Find all for author
  async findAllPerAuthor({
      filters = {},
      populate = {},
      pagination,
      sort,
      fields,
      isAdmin = false,
      authorId,
    }: clientValidator.FindAllPerAuthorValidatorSchema,
    isStrapiAuthor: boolean = false,
  ) {
    {
      if (isNil(authorId)) {
        return {
          data: [],
        };
      }

      const authorQuery = isStrapiAuthor ? {
        authorUser: {
          id: authorId,
        },
      } : {
        authorId,
      };

      const response = await this.findAllFlat({
        filters: {
          ...filterItem(filters, ['related']),
          ...authorQuery,
        },
        pagination,
        populate,
        sort,
        fields,
        isAdmin,
      });

      return {
        ...response,
        data: response.data.map(({ author, ...rest }) => rest),
      };
    }
  },

  // Find all related entiries
  async findRelatedEntitiesFor(entries: Array<Comment>): Promise<Array<CommentRelated>> {
    const data = entries.reduce(
      (acc: { [key: string]: { documentIds: Array<string | number>, locale?: Array<string> } }, curr: Comment) => {
        const [relatedUid, relatedStringId] = getRelatedGroups(curr.related);
        return {
          ...acc,
          [relatedUid]: {
            ...(acc[relatedUid] || {}),
            documentIds: [...(acc[relatedUid]?.documentIds || []), relatedStringId],
            locale: [...(acc[relatedUid]?.locale || []), curr.locale],
          },
        };
      },
      {},
    );

    return Promise.all(
      Object.entries(data).map(
        async ([relatedUid, { documentIds, locale }]) => {
          return Promise.all(
            documentIds.map((documentId, index) =>
              strapi.documents(relatedUid as ContentTypesUUIDs).findOne({
                documentId: documentId.toString(),
                locale: !isNil(locale[index]) ? locale[index] : undefined,
                status: 'published',
              }),
            ),
          ).then((relatedEntities) => relatedEntities
            .filter(_ => _).map((_) => ({
              ..._,
              uid: relatedUid,
            })),
          );
        },
      ),
    ).then((result) => result.flat(2));
  },

  // Merge related entity with comment
  mergeRelatedEntityTo(entity: Comment, relatedEntities: Array<CommentRelated> = []): CommentWithRelated {
    return {
      ...entity,
      related: relatedEntities.find(
        (relatedEntity) => {
          if (relatedEntity.locale && entity.locale) {
            return entity.related === `${relatedEntity.uid}:${relatedEntity.documentId}` && entity.locale === relatedEntity.locale;
          }
          return entity.related === `${relatedEntity.uid}:${relatedEntity.documentId}`;
        },
      ),
    };
  },
  // TODO: we need to add deepLimit to the function to prevent infinite loops
  async modifiedNestedNestedComments<T extends keyof Comment>(id: Id, fieldName: T, value: Comment[T], deepLimit: number = 10): Promise<boolean> {
    if (deepLimit === 0) {
      return true;
    }
    try {
      const entities = await this.findMany({ where: { threadOf: id } });
      const changedEntries = await getCommentRepository(strapi).updateMany({
        where: { id: entities.map((entity) => entity.id) },
        data: { [fieldName]: value },
      });
      if (entities.length === changedEntries.count && changedEntries.count > 0) {
        const nestedTransactions = await Promise.all(
          entities.map((item) =>
            this.modifiedNestedNestedComments(item.id, fieldName, value, deepLimit - 1)),
        );
        return nestedTransactions.length === changedEntries.count;
      }
      return true;
    } catch {
      return false;
    }
  },

  async checkBadWords(content: string) {
    // const config = await this.getConfig(CONFIG_PARAMS.BAD_WORDS, true);
    // if (config) {
    //   if (content && (isProfane({ testString: content }) || isPersianProfane(content))) {
    //     throw new PluginError(
    //       400,
    //       'Bad language used! Please polite your comment...',
    //       {
    //         content: {
    //           original: content,
    //           filtered: content && replaceProfanities({ testString: content }),
    //         },
    //       },
    //     );
    //   }
    // }
    return content;
  },

  async perRemove(related: string, locale?: string) {
    const defaultLocale = await strapi.plugin('i18n')?.service('locales').getDefaultLocale() || null;
    return getCommentRepository(strapi)
    .updateMany({
      where: {
        related,
        $or: [{ locale }, defaultLocale === locale ? { locale: { $eq: null } } : null].filter(Boolean)
      },
      data: {
        removed: true,
      }
    });
  },

  registerLifecycleHook(/*{ callback, contentTypeName, hookName }*/) {
  },

  async runLifecycleHook(/*{ contentTypeName, event, hookName }*/) {
  },
});

type CommonService = ReturnType<typeof commonService>;
export default commonService;
