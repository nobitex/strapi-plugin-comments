import { CoreStrapi } from '../../@types';
import { Nexus } from '../../@types/graphql';
declare const _default: (strapi: CoreStrapi, nexus: Nexus) => {
    type: import("nexus/dist/core").NexusNonNullDef<any>;
    args: {
        relation: import("nexus/dist/core").NexusNonNullDef<any>;
        sort: any;
        filters: any;
    };
    resolve(_obj: any, args: any): Promise<{
        id?: number;
        documentId?: string;
        content?: string;
        blocked?: boolean;
        blockedThread?: boolean;
        blockReason?: string;
        isAdminComment?: boolean;
        removed?: boolean;
        approvalStatus?: string;
        related?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        authorId?: string;
        authorName?: string;
        authorEmail?: string;
        authorAvatar?: string;
        authorUser?: string | {
            id?: number;
            email?: string;
        };
        locale?: string;
        section?: string;
        gotThread?: boolean;
        threadFirstItemId?: number;
        reports?: {
            id?: number;
            documentId?: string;
            content?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            locale?: string;
            reason?: string;
            resolved?: boolean;
        }[];
        author?: any;
        threadOf?: number | {
            id?: number;
            documentId?: string;
            content?: string;
            blocked?: boolean;
            blockedThread?: boolean;
            blockReason?: string;
            isAdminComment?: boolean;
            removed?: boolean;
            approvalStatus?: string;
            related?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            authorId?: string;
            authorName?: string;
            authorEmail?: string;
            authorAvatar?: string;
            authorUser?: string | {
                id?: number;
                email?: string;
            };
            locale?: string;
            section?: string;
            gotThread?: boolean;
            threadFirstItemId?: number;
            reports?: {
                id?: number;
                documentId?: string;
                content?: string;
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                locale?: string;
                reason?: string;
                resolved?: boolean;
            }[];
            author?: any;
        };
    }[]>;
};
export default _default;
