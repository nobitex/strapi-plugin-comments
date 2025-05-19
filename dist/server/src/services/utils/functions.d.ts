import { StrapiUser } from '@sensinum/strapi-utils';
import { AdminUser, Id } from '../../@types';
import PluginError from '../../utils/error';
import { Comment, CommentWithRelated } from '../../validators/repositories';
export declare const buildNestedStructure: (entities: Array<Comment | CommentWithRelated>, id?: Id | null, field?: string, dropBlockedThreads?: boolean, blockNestedThreads?: boolean) => Array<Comment>;
export declare const getRelatedGroups: (related: string) => Array<string>;
export declare const filterOurResolvedReports: (item: Comment) => Comment;
export declare const buildAuthorModel: (item: Comment | CommentWithRelated, blockedAuthorProps: Array<string>, fieldsToPopulate?: Array<string>) => Comment;
export declare const resolveUserContextError: (user?: AdminUser | StrapiUser) => PluginError;
type AuthorNameProps = {
    lastname?: string;
    firstname?: string;
    username?: string;
};
export declare const getAuthorName: (author: AuthorNameProps) => string;
export {};
