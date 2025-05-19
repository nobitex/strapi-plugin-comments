import { FindOneParams, Params } from '@strapi/database/dist/entity-manager/types';
import { CoreStrapi } from '../@types';
import { CommentResultValidator } from '../validators/repositories';
export declare const getCommentRepositorySource: (strapi: CoreStrapi) => {
    findMany(params: Params): Promise<CommentResultValidator['findMany']>;
    findWithCount(params: Params): Promise<CommentResultValidator['findWithCount']>;
    findOne(params: FindOneParams): Promise<CommentResultValidator['findOne'] | null>;
    update(params: Params): Promise<CommentResultValidator['findOne']>;
    delete(params: Params): Promise<CommentResultValidator['findOne'] | null>;
    deleteMany(params: Params): Promise<import("@strapi/database/dist/types").CountResult>;
    updateMany(params: Params): Promise<import("@strapi/database/dist/types").CountResult>;
    create(params: Pick<Params, 'data' | 'populate'>): Promise<CommentResultValidator['create']>;
};
export declare const getCommentRepository: (strapi: CoreStrapi) => {
    findMany(params: Params): Promise<CommentResultValidator['findMany']>;
    findWithCount(params: Params): Promise<CommentResultValidator['findWithCount']>;
    findOne(params: FindOneParams): Promise<CommentResultValidator['findOne'] | null>;
    update(params: Params): Promise<CommentResultValidator['findOne']>;
    delete(params: Params): Promise<CommentResultValidator['findOne'] | null>;
    deleteMany(params: Params): Promise<import("@strapi/database/dist/types").CountResult>;
    updateMany(params: Params): Promise<import("@strapi/database/dist/types").CountResult>;
    create(params: Pick<Params, 'data' | 'populate'>): Promise<CommentResultValidator['create']>;
};
export type CommentRepository = ReturnType<typeof getCommentRepository>;
