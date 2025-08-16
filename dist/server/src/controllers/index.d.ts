declare const controllers: {
    admin: ({ strapi }: import("../@types").StrapiContext) => {
        getService<T extends "gql" | "client" | "admin" | "common" | "settings">(name: T): import("../services").PluginServices[T];
        findAll(ctx: import("../@types").RequestContext): Promise<{
            pagination: {
                page?: number;
                pageSize?: number;
                pageCount?: number;
                total?: number;
            };
            result: {
                id?: number;
                documentId?: string;
                content?: string;
                blocked?: boolean;
                blockedThread?: boolean;
                blockReason?: string;
                isAdminComment?: boolean;
                removed?: boolean;
                approvalStatus?: string;
                related?: {
                    id?: number;
                    documentId?: string;
                    locale?: string;
                    uid?: string;
                    requireCommentsApproval?: boolean;
                };
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
            }[];
        }>;
        findReports(ctx: import("../@types").RequestContext): Promise<{
            result: {
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
            }[];
            pagination: {
                page?: number;
                pageSize?: number;
                pageCount?: number;
                total?: number;
            };
        }>;
        findOne(ctx: Omit<import("koa").Context, "body" | "query" | "request"> & {
            body: object;
            query: object;
            params: {
                id: string;
            };
            request: Omit<import("koa").Request, "body"> & {
                body: object;
            };
            state: {
                user?: import("../@types").AdminUser;
            };
        }): Promise<{
            entity: {
                uid: import("@strapi/types/dist/uid").ContentType;
                documentId: string;
                id: number;
            };
            selected: {
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
            };
            level: {
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
            }[];
        }>;
        blockComment(ctx: Omit<import("koa").Context, "body" | "query" | "request"> & {
            body: object;
            query: object;
            params: {
                id: string;
            };
            request: Omit<import("koa").Request, "body"> & {
                body: object;
            };
            state: {
                user?: import("../@types").AdminUser;
            };
        }): Promise<{
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
        }>;
        unblockComment(ctx: Omit<import("koa").Context, "body" | "query" | "request"> & {
            body: object;
            query: object;
            params: {
                id: string;
            };
            request: Omit<import("koa").Request, "body"> & {
                body: object;
            };
            state: {
                user?: import("../@types").AdminUser;
            };
        }): Promise<{
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
        }>;
        deleteComment(ctx: Omit<import("koa").Context, "body" | "query" | "request"> & {
            body: object;
            query: object;
            params: {
                id: string;
            };
            request: Omit<import("koa").Request, "body"> & {
                body: object;
            };
            state: {
                user?: import("../@types").AdminUser;
            };
        }): Promise<{
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
        }>;
        blockCommentThread(ctx: Omit<import("koa").Context, "body" | "query" | "request"> & {
            body: object;
            query: object;
            params: {
                id: string;
            };
            request: Omit<import("koa").Request, "body"> & {
                body: object;
            };
            state: {
                user?: import("../@types").AdminUser;
            };
        }): Promise<{
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
        }>;
        unblockCommentThread(ctx: Omit<import("koa").Context, "body" | "query" | "request"> & {
            body: object;
            query: object;
            params: {
                id: string;
            };
            request: Omit<import("koa").Request, "body"> & {
                body: object;
            };
            state: {
                user?: import("../@types").AdminUser;
            };
        }): Promise<{
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
        }>;
        resolveAbuseReport(ctx: import("../@types").RequestContext<object, {
            id: string;
            reportId: string;
        }>): Promise<{
            id?: number;
            documentId?: string;
            content?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            locale?: string;
            reason?: string;
            resolved?: boolean;
        }>;
        resolveCommentMultipleAbuseReports(ctx: Omit<import("koa").Context, "body" | "query" | "request"> & {
            body: import("../@types").Id[];
            query: object;
            params: {
                id: string;
            };
            request: Omit<import("koa").Request, "body"> & {
                body: import("../@types").Id[];
            };
            state: {
                user?: import("../@types").AdminUser;
            };
        }): Promise<import("@strapi/database/dist/types").CountResult>;
        resolveAllAbuseReportsForComment(ctx: Omit<import("koa").Context, "body" | "query" | "request"> & {
            body: object;
            query: object;
            params: {
                id: string;
            };
            request: Omit<import("koa").Request, "body"> & {
                body: object;
            };
            state: {
                user?: import("../@types").AdminUser;
            };
        }): Promise<import("@strapi/database/dist/types").CountResult>;
        resolveAllAbuseReportsForThread(ctx: Omit<import("koa").Context, "body" | "query" | "request"> & {
            body: object;
            query: object;
            params: {
                id: string;
            };
            request: Omit<import("koa").Request, "body"> & {
                body: object;
            };
            state: {
                user?: import("../@types").AdminUser;
            };
        }): Promise<import("@strapi/database/dist/types").CountResult>;
        resolveMultipleAbuseReports(ctx: import("../@types").RequestContext<import("../@types").Id[]>): Promise<import("@strapi/database/dist/types").CountResult>;
        postComment(ctx: import("../@types").RequestContext<Omit<{
            id?: string | number;
            content?: string;
            author?: {
                id?: string | number;
                email?: string;
                lastname?: string;
                username?: string;
                firstname?: string;
            };
        }, "id">, Pick<{
            id?: string | number;
            content?: string;
            author?: {
                id?: string | number;
                email?: string;
                lastname?: string;
                username?: string;
                firstname?: string;
            };
        }, "id">>): Promise<{
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
        }>;
        updateComment(ctx: import("../@types").RequestContext<Omit<{
            id?: string | number;
            content?: string;
            author?: {
                id?: string | number;
                email?: string;
                lastname?: string;
                username?: string;
                firstname?: string;
            };
        }, "id">, Pick<{
            id?: string | number;
            content?: string;
            author?: {
                id?: string | number;
                email?: string;
                lastname?: string;
                username?: string;
                firstname?: string;
            };
        }, "id">>): Promise<{
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
        }>;
        approveComment(ctx: import("../@types").RequestContext<object, {
            id?: number;
        }>): Promise<{
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
        }>;
        rejectComment(ctx: import("../@types").RequestContext<object, {
            id?: number;
        }>): Promise<{
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
        }>;
    };
    client: ({ strapi }: import("../@types").StrapiContext) => {
        getService<T_1 extends "gql" | "client" | "admin" | "common" | "settings">(name: T_1): import("../services").PluginServices[T_1];
        getStoreRepository(): {
            getLocalConfig<P extends string>(prop?: P, defaultValue?: import("../@types").PathValue<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("../const").REPORT_REASON.OTHER;
                };
                isGQLPluginEnabled?: boolean;
                gql?: {
                    auth?: boolean;
                };
                client?: {
                    url?: string;
                    contactEmail?: string;
                };
            }, P>): import("../@types").PathValue<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("../const").REPORT_REASON.OTHER;
                };
                isGQLPluginEnabled?: boolean;
                gql?: {
                    auth?: boolean;
                };
                client?: {
                    url?: string;
                    contactEmail?: string;
                };
            }, P>;
            getStore(): Promise<{
                get(params?: Partial<{
                    key: string;
                    type?: string;
                    environment?: string;
                    name?: string;
                    tag?: string;
                }>): Promise<unknown>;
                set(params?: Partial<{
                    key: string;
                    value: unknown;
                    type?: string;
                    environment?: string;
                    name?: string;
                    tag?: string;
                }>): Promise<void>;
                delete(params?: Partial<{
                    key: string;
                    type?: string;
                    environment?: string;
                    name?: string;
                    tag?: string;
                }>): Promise<void>;
            }>;
            getConfig(): Promise<Required<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("../const").REPORT_REASON.OTHER;
                };
                isGQLPluginEnabled?: boolean;
                gql?: {
                    auth?: boolean;
                };
                client?: {
                    url?: string;
                    contactEmail?: string;
                };
            }>>;
            get<T_2 extends boolean>(viaSettingsPage?: T_2): Promise<import("../utils/Either").Either<unknown, T_2 extends true ? {
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("../const").REPORT_REASON.OTHER;
                };
                isGQLPluginEnabled?: boolean;
                gql?: {
                    auth?: boolean;
                };
                client?: {
                    url?: string;
                    contactEmail?: string;
                };
            } : Omit<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("../const").REPORT_REASON.OTHER;
                };
                isGQLPluginEnabled?: boolean;
                gql?: {
                    auth?: boolean;
                };
                client?: {
                    url?: string;
                    contactEmail?: string;
                };
            }, "enabledCollections" | "moderatorRoles" | "isGQLPluginEnabled">>>;
            update(config: {
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("../const").REPORT_REASON.OTHER;
                };
                isGQLPluginEnabled?: boolean;
                gql?: {
                    auth?: boolean;
                };
                client?: {
                    url?: string;
                    contactEmail?: string;
                };
            }): Promise<import("../utils/Either").Either<unknown, {
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("../const").REPORT_REASON.OTHER;
                };
                isGQLPluginEnabled?: boolean;
                gql?: {
                    auth?: boolean;
                };
                client?: {
                    url?: string;
                    contactEmail?: string;
                };
            } | Omit<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("../const").REPORT_REASON.OTHER;
                };
                isGQLPluginEnabled?: boolean;
                gql?: {
                    auth?: boolean;
                };
                client?: {
                    url?: string;
                    contactEmail?: string;
                };
            }, "enabledCollections" | "moderatorRoles" | "isGQLPluginEnabled">>>;
            restore(): Promise<import("../utils/Either").Either<unknown, {
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("../const").REPORT_REASON.OTHER;
                };
                isGQLPluginEnabled?: boolean;
                gql?: {
                    auth?: boolean;
                };
                client?: {
                    url?: string;
                    contactEmail?: string;
                };
            } | Omit<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("../const").REPORT_REASON.OTHER;
                };
                isGQLPluginEnabled?: boolean;
                gql?: {
                    auth?: boolean;
                };
                client?: {
                    url?: string;
                    contactEmail?: string;
                };
            }, "enabledCollections" | "moderatorRoles" | "isGQLPluginEnabled">>>;
        };
        post(ctx: import("../@types").RequestContext<object, Pick<{
            content?: string;
            approvalStatus?: import("../const").APPROVAL_STATUS;
            locale?: string;
            section?: string;
            author?: {
                name?: string;
                id?: string | number;
                email?: string;
                avatar?: string;
            };
            threadOf?: string | number;
            relation?: `${string}::${string}.${string}`;
        }, "relation">>): Promise<{
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
        }>;
        findAllFlat(ctx: import("../@types").RequestContext<object, Pick<{
            sort?: string;
            locale?: string;
            pagination?: {
                page?: number;
                pageSize?: number;
                withCount?: boolean;
            };
            relation?: `${string}::${string}.${string}`;
            populate?: Record<string, boolean | {
                populate?: boolean;
            }>;
            filters?: {
                id?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                content?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                blocked?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                blockedThread?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                isAdminComment?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                removed?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                approvalStatus?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                createdAt?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                updatedAt?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                authorId?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                authorName?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                authorEmail?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                $or?: {
                    id?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    content?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    blocked?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    blockedThread?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    isAdminComment?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    removed?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    approvalStatus?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    createdAt?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    updatedAt?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorId?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorName?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorEmail?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                }[];
                $and?: {
                    id?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    content?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    blocked?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    blockedThread?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    isAdminComment?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    removed?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    approvalStatus?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    createdAt?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    updatedAt?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorId?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorName?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorEmail?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                }[];
            };
            limit?: number;
            fields?: string[];
            omit?: string[];
            isAdmin?: boolean;
            skip?: number;
        }, "relation">>): Promise<{
            data: ({
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
            } | {
                id?: number;
                documentId?: string;
                content?: string;
                blocked?: boolean;
                blockedThread?: boolean;
                blockReason?: string;
                isAdminComment?: boolean;
                removed?: boolean;
                approvalStatus?: string;
                related?: {
                    id?: number;
                    documentId?: string;
                    locale?: string;
                    uid?: string;
                    requireCommentsApproval?: boolean;
                };
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
            })[];
            pagination?: {
                page?: number;
                pageSize?: number;
                pageCount?: number;
                total?: number;
            };
        }>;
        findAllInHierarchy(ctx: import("../@types").RequestContext<object, Pick<{
            sort?: string;
            locale?: string;
            relation?: `${string}::${string}.${string}`;
            populate?: Record<string, boolean | {
                populate?: boolean;
            }>;
            filters?: {
                id?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                content?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                blocked?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                blockedThread?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                isAdminComment?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                removed?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                approvalStatus?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                createdAt?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                updatedAt?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                authorId?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                authorName?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                authorEmail?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                $or?: {
                    id?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    content?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    blocked?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    blockedThread?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    isAdminComment?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    removed?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    approvalStatus?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    createdAt?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    updatedAt?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorId?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorName?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorEmail?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                }[];
                $and?: {
                    id?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    content?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    blocked?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    blockedThread?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    isAdminComment?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    removed?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    approvalStatus?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    createdAt?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    updatedAt?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorId?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorName?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorEmail?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                }[];
            };
            limit?: number;
            fields?: string[];
            omit?: string[];
            isAdmin?: boolean;
            skip?: number;
            startingFromId?: number;
            dropBlockedThreads?: boolean;
        }, "relation">>): Promise<{
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
        findAllPerAuthor(ctx: import("../@types").RequestContext<object, Pick<{
            type?: string;
            sort?: string;
            authorId?: string | number;
            locale?: string;
            pagination?: {
                page?: number;
                pageSize?: number;
                withCount?: boolean;
            };
            populate?: Record<string, boolean | {
                populate?: boolean;
            }>;
            filters?: {
                id?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                content?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                blocked?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                blockedThread?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                isAdminComment?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                removed?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                approvalStatus?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                createdAt?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                updatedAt?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                authorId?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                authorName?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                authorEmail?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
                } | {
                    $notContains?: string;
                } | {
                    $notContainsi?: string;
                } | {
                    $null?: string;
                } | {
                    $notNull?: boolean;
                };
                $or?: {
                    id?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    content?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    blocked?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    blockedThread?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    isAdminComment?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    removed?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    approvalStatus?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    createdAt?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    updatedAt?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorId?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorName?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorEmail?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                }[];
                $and?: {
                    id?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    content?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    blocked?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    blockedThread?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    isAdminComment?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    removed?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    approvalStatus?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    createdAt?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    updatedAt?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorId?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorName?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                    authorEmail?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
                    } | {
                        $notContains?: string;
                    } | {
                        $notContainsi?: string;
                    } | {
                        $null?: string;
                    } | {
                        $notNull?: boolean;
                    };
                }[];
            };
            limit?: number;
            fields?: string[];
            omit?: string[];
            isAdmin?: boolean;
            skip?: number;
        }, "type" | "authorId">>): Promise<{
            data: ({
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
            } | {
                id?: number;
                documentId?: string;
                content?: string;
                blocked?: boolean;
                blockedThread?: boolean;
                blockReason?: string;
                isAdminComment?: boolean;
                removed?: boolean;
                approvalStatus?: string;
                related?: {
                    id?: number;
                    documentId?: string;
                    locale?: string;
                    uid?: string;
                    requireCommentsApproval?: boolean;
                };
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
            })[];
            pagination?: {
                page?: number;
                pageSize?: number;
                pageCount?: number;
                total?: number;
            };
        }>;
        put(ctx: import("../@types").RequestContext<{
            content: string;
            author: unknown;
        }>): Promise<{
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
        }>;
        reportAbuse(ctx: import("../@types").RequestContext): Promise<{
            related: {
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
            };
            id?: number;
            documentId?: string;
            content?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            locale?: string;
            reason?: string;
            resolved?: boolean;
        }>;
        removeComment(ctx: import("../@types").RequestContext): Promise<{
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
        }>;
    };
    settings: ({ strapi }: import("../@types").StrapiContext) => {
        get(ctx: import("../@types").RequestContext): Promise<{
            enabledCollections?: string[];
            approvalFlow?: string[];
            entryLabel?: Record<string, string[]>;
            moderatorRoles?: string[];
            badWords?: boolean;
            blockedAuthorProps?: string[];
            isValidationEnabled?: boolean;
            reportReasons?: {
                BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                OTHER?: import("../const").REPORT_REASON.OTHER;
            };
            isGQLPluginEnabled?: boolean;
            gql?: {
                auth?: boolean;
            };
            client?: {
                url?: string;
                contactEmail?: string;
            };
        } | Omit<{
            enabledCollections?: string[];
            approvalFlow?: string[];
            entryLabel?: Record<string, string[]>;
            moderatorRoles?: string[];
            badWords?: boolean;
            blockedAuthorProps?: string[];
            isValidationEnabled?: boolean;
            reportReasons?: {
                BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                OTHER?: import("../const").REPORT_REASON.OTHER;
            };
            isGQLPluginEnabled?: boolean;
            gql?: {
                auth?: boolean;
            };
            client?: {
                url?: string;
                contactEmail?: string;
            };
        }, "enabledCollections" | "moderatorRoles" | "isGQLPluginEnabled">>;
        getForSettingsPage(ctx: import("../@types").RequestContext): Promise<{
            enabledCollections?: string[];
            approvalFlow?: string[];
            entryLabel?: Record<string, string[]>;
            moderatorRoles?: string[];
            badWords?: boolean;
            blockedAuthorProps?: string[];
            isValidationEnabled?: boolean;
            reportReasons?: {
                BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                OTHER?: import("../const").REPORT_REASON.OTHER;
            };
            isGQLPluginEnabled?: boolean;
            gql?: {
                auth?: boolean;
            };
            client?: {
                url?: string;
                contactEmail?: string;
            };
        } | Omit<{
            enabledCollections?: string[];
            approvalFlow?: string[];
            entryLabel?: Record<string, string[]>;
            moderatorRoles?: string[];
            badWords?: boolean;
            blockedAuthorProps?: string[];
            isValidationEnabled?: boolean;
            reportReasons?: {
                BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                OTHER?: import("../const").REPORT_REASON.OTHER;
            };
            isGQLPluginEnabled?: boolean;
            gql?: {
                auth?: boolean;
            };
            client?: {
                url?: string;
                contactEmail?: string;
            };
        }, "enabledCollections" | "moderatorRoles" | "isGQLPluginEnabled">>;
        update(ctx: import("../@types").RequestContext<{
            enabledCollections?: string[];
            approvalFlow?: string[];
            entryLabel?: Record<string, string[]>;
            moderatorRoles?: string[];
            badWords?: boolean;
            blockedAuthorProps?: string[];
            isValidationEnabled?: boolean;
            reportReasons?: {
                BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                OTHER?: import("../const").REPORT_REASON.OTHER;
            };
            isGQLPluginEnabled?: boolean;
            gql?: {
                auth?: boolean;
            };
            client?: {
                url?: string;
                contactEmail?: string;
            };
        }>): Promise<{
            enabledCollections?: string[];
            approvalFlow?: string[];
            entryLabel?: Record<string, string[]>;
            moderatorRoles?: string[];
            badWords?: boolean;
            blockedAuthorProps?: string[];
            isValidationEnabled?: boolean;
            reportReasons?: {
                BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                OTHER?: import("../const").REPORT_REASON.OTHER;
            };
            isGQLPluginEnabled?: boolean;
            gql?: {
                auth?: boolean;
            };
            client?: {
                url?: string;
                contactEmail?: string;
            };
        } | Omit<{
            enabledCollections?: string[];
            approvalFlow?: string[];
            entryLabel?: Record<string, string[]>;
            moderatorRoles?: string[];
            badWords?: boolean;
            blockedAuthorProps?: string[];
            isValidationEnabled?: boolean;
            reportReasons?: {
                BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                OTHER?: import("../const").REPORT_REASON.OTHER;
            };
            isGQLPluginEnabled?: boolean;
            gql?: {
                auth?: boolean;
            };
            client?: {
                url?: string;
                contactEmail?: string;
            };
        }, "enabledCollections" | "moderatorRoles" | "isGQLPluginEnabled">>;
        restore(ctx: import("../@types").RequestContext): Promise<{
            enabledCollections?: string[];
            approvalFlow?: string[];
            entryLabel?: Record<string, string[]>;
            moderatorRoles?: string[];
            badWords?: boolean;
            blockedAuthorProps?: string[];
            isValidationEnabled?: boolean;
            reportReasons?: {
                BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                OTHER?: import("../const").REPORT_REASON.OTHER;
            };
            isGQLPluginEnabled?: boolean;
            gql?: {
                auth?: boolean;
            };
            client?: {
                url?: string;
                contactEmail?: string;
            };
        } | Omit<{
            enabledCollections?: string[];
            approvalFlow?: string[];
            entryLabel?: Record<string, string[]>;
            moderatorRoles?: string[];
            badWords?: boolean;
            blockedAuthorProps?: string[];
            isValidationEnabled?: boolean;
            reportReasons?: {
                BAD_LANGUAGE?: import("../const").REPORT_REASON.BAD_LANGUAGE;
                DISCRIMINATION?: import("../const").REPORT_REASON.DISCRIMINATION;
                OTHER?: import("../const").REPORT_REASON.OTHER;
            };
            isGQLPluginEnabled?: boolean;
            gql?: {
                auth?: boolean;
            };
            client?: {
                url?: string;
                contactEmail?: string;
            };
        }, "enabledCollections" | "moderatorRoles" | "isGQLPluginEnabled">>;
        restart(ctx: import("../@types").RequestContext): Promise<any>;
    };
};
export type PluginControllers = {
    [key in keyof typeof controllers]: ReturnType<typeof controllers[key]>;
};
export default controllers;
