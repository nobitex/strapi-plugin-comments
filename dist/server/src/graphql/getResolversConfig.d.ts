import { CommentsPluginConfig } from '../config';
export declare const getResolversConfig: (config: CommentsPluginConfig) => {
    'Query.findAllFlat': {
        auth: boolean;
    };
    'Query.findAllInHierarchy': {
        auth: boolean;
    };
    'Mutation.getCreateComment': {
        auth: boolean;
    };
    'Mutation.getUpdateComment': {
        auth: boolean;
    };
    'Mutation.getRemoveComment': {
        auth: boolean;
    };
    'Mutation.getCreateAbuseReport': {
        auth: boolean;
    };
};
