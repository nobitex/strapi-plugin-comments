import { once, set } from 'lodash';
import { CoreStrapi, DBQuery, Where } from '../../@types';
import { getDefaultAuthorPopulate, getOrderBy } from '../../repositories/utils';
import { admin as adminValidator } from '../../validators/api';

export const getAdminServiceUtils = once((strapi: CoreStrapi) => {
  return {
    findAll: {
      createParams(
        orderBy: adminValidator.CommentFindAllSchema['orderBy'],
        page: adminValidator.CommentFindAllSchema['page'],
        pageSize: adminValidator.CommentFindAllSchema['pageSize'],
        _q: adminValidator.CommentFindAllSchema['_q'],
        filters: adminValidator.CommentFindAllSchema['filters'],
      ) {
        const [operator, direction] = getOrderBy(orderBy);
        const params: Partial<DBQuery> = {
          orderBy: orderBy ? { [operator]: direction } : undefined,
          where: filters as Where,
          page,
          pageSize,
        };

        if (_q) {
          params.where = {
            ...params.where,
            content: {
              ...(params.where?.content || {}),
              // @ts-ignore
              $contains: _q,
            },
          };
        }
        return params;
      },
      getPopulate() {
        return {
          authorUser: getDefaultAuthorPopulate(strapi),
          threadOf: {
            populate: {
              authorUser: getDefaultAuthorPopulate(strapi),
            },
          },
          reports: {
            where: {
              resolved: false,
            },
          },
        };
      },
    },
    findReports: {
      getDefaultWhere(): Where {
        return {
          resolved: {
            $notNull: true,
          },
        };
      },
      createParams(
        orderBy: adminValidator.CommentFindAllSchema['orderBy'],
        page: adminValidator.CommentFindAllSchema['page'],
        pageSize: adminValidator.CommentFindAllSchema['pageSize'],
        _q: adminValidator.CommentFindAllSchema['_q'],
      ) {
        const [operator, direction] = getOrderBy(orderBy);
        const params: Partial<DBQuery> = {
          orderBy: orderBy ? { [operator]: direction } : undefined,
          where: this.getDefaultWhere(),
          page,
          pageSize,
        };
        if (_q) {
          set(params, 'where.content.$contains', _q);
        }
        return params;
      },
    },
    findOneAndThread: {
      getDefaultWhere(removed?: boolean) {
        return removed ? { $or: [{ removed: false }, { removed: { $notNull: false } }] } : {};
      },
      getPopulate() {
        const defaultAuthorUserPopulate = getDefaultAuthorPopulate(strapi);
        const reportsPopulation = {
          reports: {
            where: {
              resolved: false,
            },
          },
        };
        const basePopulate = {
          populate: {
            threadOf: {
              populate: {
                ...reportsPopulation,
              },
            },
            ...reportsPopulation,
          },
        };
        return {
          populate: {
            ...basePopulate.populate,
            authorUser: defaultAuthorUserPopulate,
            threadOf: {
              populate: {
                ...basePopulate.populate.threadOf.populate,
                authorUser: defaultAuthorUserPopulate,
              },
            },
          },
        };
      },
    },
  };
});
