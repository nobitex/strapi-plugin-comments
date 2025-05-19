type MutationKey = {
    comment: {
        block: boolean;
        unBlock: boolean;
        blockThread: boolean;
        unBlockThread: boolean;
        delete: boolean;
        postComment: boolean;
    };
    report: {
        resolve: boolean;
        resolveMultiple: boolean;
        resolveAllAbuse: boolean;
        resolveAllAbuseThread: boolean;
        resolveCommentMultipleReports: boolean;
    };
};
type CallbacksMutation = {
    [K in keyof MutationKey]?: {
        [L in keyof MutationKey[K] as `${L & string}${'Success' | 'Error'}`]?: () => void;
    };
};
export declare const useCommentMutations: (callbacksMutation?: CallbacksMutation) => {
    commentMutation: {
        block: import("@tanstack/react-query").UseMutationResult<import("@strapi/admin/strapi-admin").FetchResponse<any>, Error, number, unknown>;
        unBlock: import("@tanstack/react-query").UseMutationResult<import("@strapi/admin/strapi-admin").FetchResponse<any>, Error, number, unknown>;
        blockThread: import("@tanstack/react-query").UseMutationResult<import("@strapi/admin/strapi-admin").FetchResponse<any>, Error, number, unknown>;
        unBlockThread: import("@tanstack/react-query").UseMutationResult<import("@strapi/admin/strapi-admin").FetchResponse<any>, Error, number, unknown>;
        delete: import("@tanstack/react-query").UseMutationResult<import("@strapi/admin/strapi-admin").FetchResponse<any>, Error, number, unknown>;
        postComment: import("@tanstack/react-query").UseMutationResult<import("@strapi/admin/strapi-admin").FetchResponse<any>, Error, {
            id: string | number;
            content: string;
            author: {
                email: string;
                id: number;
                documentId: string;
                createdAt: string;
                updatedAt: string;
                publishedAt: string;
                locale: null;
                blocked: boolean;
                firstname: string;
                lastname: string;
                username: string | null;
                isActive: boolean;
                preferedLanguage: string | null;
                roles: {
                    code: string;
                    id: number;
                    name: string;
                    description: string;
                }[];
            };
        }, unknown>;
    };
    reportMutation: {
        resolve: import("@tanstack/react-query").UseMutationResult<import("@strapi/admin/strapi-admin").FetchResponse<any>, Error, {
            id: number;
            reportId: number;
        }, unknown>;
        resolveMultiple: import("@tanstack/react-query").UseMutationResult<import("@strapi/admin/strapi-admin").FetchResponse<any>, Error, {
            reportIds: number[];
        }, unknown>;
        resolveAllAbuse: import("@tanstack/react-query").UseMutationResult<import("@strapi/admin/strapi-admin").FetchResponse<any>, Error, number, unknown>;
        resolveAllAbuseThread: import("@tanstack/react-query").UseMutationResult<import("@strapi/admin/strapi-admin").FetchResponse<any>, Error, number, unknown>;
        resolveCommentMultipleReports: import("@tanstack/react-query").UseMutationResult<import("@strapi/admin/strapi-admin").FetchResponse<any>, Error, {
            id: number;
            reportIds: number[];
        }, unknown>;
    };
};
export {};
