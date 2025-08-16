declare const _default: {
    register: (context: import("./@types").StrapiContext) => void;
    bootstrap: ({ strapi }: import("./@types").StrapiContext) => Promise<void>;
    config: {
        readonly default: {
            enabledCollections?: string[];
            approvalFlow?: string[];
            entryLabel?: Record<string, string[]>;
            moderatorRoles?: string[];
            badWords?: boolean;
            blockedAuthorProps?: string[];
            isValidationEnabled?: boolean;
            reportReasons?: {
                BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                OTHER?: import("./const").REPORT_REASON.OTHER;
            };
            isGQLPluginEnabled?: boolean;
            gql?: {
                auth?: boolean;
            };
            client?: {
                url?: string;
                contactEmail?: string;
            };
        };
        readonly validate: (config: unknown) => import("zod").SafeParseReturnType<{
            enabledCollections?: string[];
            approvalFlow?: string[];
            entryLabel?: Record<string, string[]>;
            moderatorRoles?: string[];
            badWords?: boolean;
            blockedAuthorProps?: string[];
            isValidationEnabled?: boolean;
            reportReasons?: {
                BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                OTHER?: import("./const").REPORT_REASON.OTHER;
            };
            isGQLPluginEnabled?: boolean;
            gql?: {
                auth?: boolean;
            };
            client?: {
                url?: string;
                contactEmail?: string;
            };
        }, {
            enabledCollections?: string[];
            approvalFlow?: string[];
            entryLabel?: Record<string, string[]>;
            moderatorRoles?: string[];
            badWords?: boolean;
            blockedAuthorProps?: string[];
            isValidationEnabled?: boolean;
            reportReasons?: {
                BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                OTHER?: import("./const").REPORT_REASON.OTHER;
            };
            isGQLPluginEnabled?: boolean;
            gql?: {
                auth?: boolean;
            };
            client?: {
                url?: string;
                contactEmail?: string;
            };
        }>;
    };
    controllers: {
        admin: ({ strapi }: import("./@types").StrapiContext) => {
            getService<T extends "gql" | "client" | "admin" | "common" | "settings">(name: T): import("./services").PluginServices[T];
            findAll(ctx: import("./@types").RequestContext): Promise<{
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
            findReports(ctx: import("./@types").RequestContext): Promise<{
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
                    user?: import("./@types").AdminUser;
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
                    user?: import("./@types").AdminUser;
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
                    user?: import("./@types").AdminUser;
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
                    user?: import("./@types").AdminUser;
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
                    user?: import("./@types").AdminUser;
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
                    user?: import("./@types").AdminUser;
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
            resolveAbuseReport(ctx: import("./@types").RequestContext<object, {
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
                body: import("./@types").Id[];
                query: object;
                params: {
                    id: string;
                };
                request: Omit<import("koa").Request, "body"> & {
                    body: import("./@types").Id[];
                };
                state: {
                    user?: import("./@types").AdminUser;
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
                    user?: import("./@types").AdminUser;
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
                    user?: import("./@types").AdminUser;
                };
            }): Promise<import("@strapi/database/dist/types").CountResult>;
            resolveMultipleAbuseReports(ctx: import("./@types").RequestContext<import("./@types").Id[]>): Promise<import("@strapi/database/dist/types").CountResult>;
            postComment(ctx: import("./@types").RequestContext<Omit<{
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
            updateComment(ctx: import("./@types").RequestContext<Omit<{
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
            approveComment(ctx: import("./@types").RequestContext<object, {
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
            rejectComment(ctx: import("./@types").RequestContext<object, {
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
        client: ({ strapi }: import("./@types").StrapiContext) => {
            getService<T_1 extends "gql" | "client" | "admin" | "common" | "settings">(name: T_1): import("./services").PluginServices[T_1];
            getStoreRepository(): {
                getLocalConfig<P extends string>(prop?: P, defaultValue?: import("./@types").PathValue<{
                    enabledCollections?: string[];
                    approvalFlow?: string[];
                    entryLabel?: Record<string, string[]>;
                    moderatorRoles?: string[];
                    badWords?: boolean;
                    blockedAuthorProps?: string[];
                    isValidationEnabled?: boolean;
                    reportReasons?: {
                        BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                        DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                        OTHER?: import("./const").REPORT_REASON.OTHER;
                    };
                    isGQLPluginEnabled?: boolean;
                    gql?: {
                        auth?: boolean;
                    };
                    client?: {
                        url?: string;
                        contactEmail?: string;
                    };
                }, P>): import("./@types").PathValue<{
                    enabledCollections?: string[];
                    approvalFlow?: string[];
                    entryLabel?: Record<string, string[]>;
                    moderatorRoles?: string[];
                    badWords?: boolean;
                    blockedAuthorProps?: string[];
                    isValidationEnabled?: boolean;
                    reportReasons?: {
                        BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                        DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                        OTHER?: import("./const").REPORT_REASON.OTHER;
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
                        BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                        DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                        OTHER?: import("./const").REPORT_REASON.OTHER;
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
                get<T_2 extends boolean>(viaSettingsPage?: T_2): Promise<import("./utils/Either").Either<unknown, T_2 extends true ? {
                    enabledCollections?: string[];
                    approvalFlow?: string[];
                    entryLabel?: Record<string, string[]>;
                    moderatorRoles?: string[];
                    badWords?: boolean;
                    blockedAuthorProps?: string[];
                    isValidationEnabled?: boolean;
                    reportReasons?: {
                        BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                        DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                        OTHER?: import("./const").REPORT_REASON.OTHER;
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
                        BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                        DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                        OTHER?: import("./const").REPORT_REASON.OTHER;
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
                        BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                        DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                        OTHER?: import("./const").REPORT_REASON.OTHER;
                    };
                    isGQLPluginEnabled?: boolean;
                    gql?: {
                        auth?: boolean;
                    };
                    client?: {
                        url?: string;
                        contactEmail?: string;
                    };
                }): Promise<import("./utils/Either").Either<unknown, {
                    enabledCollections?: string[];
                    approvalFlow?: string[];
                    entryLabel?: Record<string, string[]>;
                    moderatorRoles?: string[];
                    badWords?: boolean;
                    blockedAuthorProps?: string[];
                    isValidationEnabled?: boolean;
                    reportReasons?: {
                        BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                        DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                        OTHER?: import("./const").REPORT_REASON.OTHER;
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
                        BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                        DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                        OTHER?: import("./const").REPORT_REASON.OTHER;
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
                restore(): Promise<import("./utils/Either").Either<unknown, {
                    enabledCollections?: string[];
                    approvalFlow?: string[];
                    entryLabel?: Record<string, string[]>;
                    moderatorRoles?: string[];
                    badWords?: boolean;
                    blockedAuthorProps?: string[];
                    isValidationEnabled?: boolean;
                    reportReasons?: {
                        BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                        DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                        OTHER?: import("./const").REPORT_REASON.OTHER;
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
                        BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                        DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                        OTHER?: import("./const").REPORT_REASON.OTHER;
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
            post(ctx: import("./@types").RequestContext<object, Pick<{
                content?: string;
                approvalStatus?: import("./const").APPROVAL_STATUS;
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
            findAllFlat(ctx: import("./@types").RequestContext<object, Pick<{
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
            findAllInHierarchy(ctx: import("./@types").RequestContext<object, Pick<{
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
            findAllPerAuthor(ctx: import("./@types").RequestContext<object, Pick<{
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
            put(ctx: import("./@types").RequestContext<{
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
            reportAbuse(ctx: import("./@types").RequestContext): Promise<{
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
            removeComment(ctx: import("./@types").RequestContext): Promise<{
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
        settings: ({ strapi }: import("./@types").StrapiContext) => {
            get(ctx: import("./@types").RequestContext): Promise<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
            getForSettingsPage(ctx: import("./@types").RequestContext): Promise<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
            update(ctx: import("./@types").RequestContext<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
            restore(ctx: import("./@types").RequestContext): Promise<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
            restart(ctx: import("./@types").RequestContext): Promise<any>;
        };
    };
    routes: {
        'content-api': {
            type: string;
            routes: import("./@types").StrapiRoute<"client">[];
        };
        admin: {
            type: string;
            routes: (import("./@types").StrapiRoute<"admin"> | import("./@types").StrapiRoute<"settings">)[];
        };
    };
    services: {
        admin: ({ strapi }: import("./@types").StrapiContext) => {
            getCommonService(): {
                getConfig<T_3 extends string>(prop?: T_3, defaultValue?: import("./@types").PathValue<{
                    enabledCollections?: string[];
                    approvalFlow?: string[];
                    entryLabel?: Record<string, string[]>;
                    moderatorRoles?: string[];
                    badWords?: boolean;
                    blockedAuthorProps?: string[];
                    isValidationEnabled?: boolean;
                    reportReasons?: {
                        BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                        DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                        OTHER?: import("./const").REPORT_REASON.OTHER;
                    };
                    isGQLPluginEnabled?: boolean;
                    gql?: {
                        auth?: boolean;
                    };
                    client?: {
                        url?: string;
                        contactEmail?: string;
                    };
                }, T_3>, useLocal?: boolean): Promise<import("./@types").PathValue<{
                    enabledCollections?: string[];
                    approvalFlow?: string[];
                    entryLabel?: Record<string, string[]>;
                    moderatorRoles?: string[];
                    badWords?: boolean;
                    blockedAuthorProps?: string[];
                    isValidationEnabled?: boolean;
                    reportReasons?: {
                        BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                        DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                        OTHER?: import("./const").REPORT_REASON.OTHER;
                    };
                    isGQLPluginEnabled?: boolean;
                    gql?: {
                        auth?: boolean;
                    };
                    client?: {
                        url?: string;
                        contactEmail?: string;
                    };
                }, T_3>>;
                parseRelationString(relation: string): {
                    uid: import("@strapi/types/dist/uid").ContentType;
                    relatedId: string;
                };
                isValidUserContext<T_4 extends {
                    id?: string | number;
                }>(user?: T_4): boolean;
                sanitizeCommentEntity(entity: {
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
                }, blockedAuthors: string[], omitProps?: ("id" | "documentId" | "content" | "blocked" | "blockedThread" | "blockReason" | "isAdminComment" | "removed" | "approvalStatus" | "related" | "createdAt" | "updatedAt" | "publishedAt" | "authorId" | "authorName" | "authorEmail" | "authorAvatar" | "authorUser" | "locale" | "section" | "gotThread" | "threadFirstItemId" | "reports" | "author" | "threadOf")[], populate?: any): {
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
                findAllFlat({ fields, limit, skip, sort, populate, omit: baseOmit, isAdmin, pagination, filters, locale, }: {
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
                }, relatedEntity?: any): Promise<{
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
                findAllInHierarchy({ filters, populate, sort, fields, startingFromId, dropBlockedThreads, isAdmin, omit, locale, limit, }: {
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
                }, relatedEntity?: any): Promise<{
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
                findOne(criteria: Partial<any>): Promise<{
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
                findMany(criteria: import("@strapi/database/dist/entity-manager").Params): Promise<{
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
                updateComment(criteria: Partial<any>, data: Partial<{
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
                findAllPerAuthor({ filters, populate, pagination, sort, fields, isAdmin, authorId, }: {
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
                }, isStrapiAuthor?: boolean): Promise<{
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
                findRelatedEntitiesFor(entries: {
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
                }[]): Promise<{
                    id?: number;
                    documentId?: string;
                    locale?: string;
                    uid?: string;
                    requireCommentsApproval?: boolean;
                }[]>;
                mergeRelatedEntityTo(entity: {
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
                }, relatedEntities?: {
                    id?: number;
                    documentId?: string;
                    locale?: string;
                    uid?: string;
                    requireCommentsApproval?: boolean;
                }[]): {
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
                };
                modifiedNestedNestedComments<T_5 extends "id" | "documentId" | "content" | "blocked" | "blockedThread" | "blockReason" | "isAdminComment" | "removed" | "approvalStatus" | "related" | "createdAt" | "updatedAt" | "publishedAt" | "authorId" | "authorName" | "authorEmail" | "authorAvatar" | "authorUser" | "locale" | "section" | "gotThread" | "threadFirstItemId" | "reports" | "author" | "threadOf">(id: import("./@types").Id, fieldName: T_5, value: {
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
                }[T_5], deepLimit?: number): Promise<boolean>;
                checkBadWords(content: string): Promise<string>;
                perRemove(related: string, locale?: string): Promise<import("@strapi/database/dist/types").CountResult>;
                registerLifecycleHook(): void;
                runLifecycleHook(): Promise<void>;
            };
            findAll({ _q, orderBy, page, pageSize, filters }: {
                page?: number;
                pageSize?: number;
                _q?: string;
                orderBy?: string;
                filters?: {
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
                    $or?: {
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
                    }[];
                };
            }): Promise<{
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
            findReports({ _q, orderBy, page, pageSize }: {
                page?: number;
                pageSize?: number;
                _q?: string;
                orderBy?: string;
                filters?: {
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
                    $or?: {
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
                    }[];
                };
            }): Promise<{
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
            findOneAndThread({ id, removed, ...query }: {
                id?: number;
                removed?: boolean;
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
            changeBlockedComment(id: import("./@types").Id, forceStatus?: boolean): Promise<{
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
            deleteComment(id: import("./@types").Id): Promise<{
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
            blockCommentThread(id: import("./@types").Id, forceStatus?: boolean): Promise<{
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
            approveComment(id: import("./@types").Id): Promise<{
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
            rejectComment(id: import("./@types").Id): Promise<{
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
            blockNestedThreads(id: import("./@types").Id, status: boolean): Promise<boolean>;
            resolveAbuseReport({ id: commentId, reportId, }: {
                id?: number;
                reportId?: number;
            }): Promise<{
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
            resolveCommentMultipleAbuseReports({ id: commentId, reportIds: ids, }: {
                id?: number;
                reportIds?: number[];
            }): Promise<import("@strapi/database/dist/types").CountResult>;
            resolveAllAbuseReportsForComment(id: import("./@types").Id): Promise<import("@strapi/database/dist/types").CountResult>;
            resolveAllAbuseReportsForThread(commentId: number): Promise<import("@strapi/database/dist/types").CountResult>;
            resolveMultipleAbuseReports({ reportIds, }: {
                reportIds?: number[];
            }): Promise<import("@strapi/database/dist/types").CountResult>;
            postComment({ id, author, content }: {
                id?: string | number;
                content?: string;
                author?: {
                    id?: string | number;
                    email?: string;
                    lastname?: string;
                    username?: string;
                    firstname?: string;
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
            updateComment({ id, content }: {
                id?: string | number;
                content?: string;
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
        };
        client: ({ strapi }: import("./@types").StrapiContext) => {
            getCommonService(): {
                getConfig<T_3 extends string>(prop?: T_3, defaultValue?: import("./@types").PathValue<{
                    enabledCollections?: string[];
                    approvalFlow?: string[];
                    entryLabel?: Record<string, string[]>;
                    moderatorRoles?: string[];
                    badWords?: boolean;
                    blockedAuthorProps?: string[];
                    isValidationEnabled?: boolean;
                    reportReasons?: {
                        BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                        DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                        OTHER?: import("./const").REPORT_REASON.OTHER;
                    };
                    isGQLPluginEnabled?: boolean;
                    gql?: {
                        auth?: boolean;
                    };
                    client?: {
                        url?: string;
                        contactEmail?: string;
                    };
                }, T_3>, useLocal?: boolean): Promise<import("./@types").PathValue<{
                    enabledCollections?: string[];
                    approvalFlow?: string[];
                    entryLabel?: Record<string, string[]>;
                    moderatorRoles?: string[];
                    badWords?: boolean;
                    blockedAuthorProps?: string[];
                    isValidationEnabled?: boolean;
                    reportReasons?: {
                        BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                        DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                        OTHER?: import("./const").REPORT_REASON.OTHER;
                    };
                    isGQLPluginEnabled?: boolean;
                    gql?: {
                        auth?: boolean;
                    };
                    client?: {
                        url?: string;
                        contactEmail?: string;
                    };
                }, T_3>>;
                parseRelationString(relation: string): {
                    uid: import("@strapi/types/dist/uid").ContentType;
                    relatedId: string;
                };
                isValidUserContext<T_4 extends {
                    id?: string | number;
                }>(user?: T_4): boolean;
                sanitizeCommentEntity(entity: {
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
                }, blockedAuthors: string[], omitProps?: ("id" | "documentId" | "content" | "blocked" | "blockedThread" | "blockReason" | "isAdminComment" | "removed" | "approvalStatus" | "related" | "createdAt" | "updatedAt" | "publishedAt" | "authorId" | "authorName" | "authorEmail" | "authorAvatar" | "authorUser" | "locale" | "section" | "gotThread" | "threadFirstItemId" | "reports" | "author" | "threadOf")[], populate?: any): {
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
                findAllFlat({ fields, limit, skip, sort, populate, omit: baseOmit, isAdmin, pagination, filters, locale, }: {
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
                }, relatedEntity?: any): Promise<{
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
                findAllInHierarchy({ filters, populate, sort, fields, startingFromId, dropBlockedThreads, isAdmin, omit, locale, limit, }: {
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
                }, relatedEntity?: any): Promise<{
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
                findOne(criteria: Partial<any>): Promise<{
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
                findMany(criteria: import("@strapi/database/dist/entity-manager").Params): Promise<{
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
                updateComment(criteria: Partial<any>, data: Partial<{
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
                findAllPerAuthor({ filters, populate, pagination, sort, fields, isAdmin, authorId, }: {
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
                }, isStrapiAuthor?: boolean): Promise<{
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
                findRelatedEntitiesFor(entries: {
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
                }[]): Promise<{
                    id?: number;
                    documentId?: string;
                    locale?: string;
                    uid?: string;
                    requireCommentsApproval?: boolean;
                }[]>;
                mergeRelatedEntityTo(entity: {
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
                }, relatedEntities?: {
                    id?: number;
                    documentId?: string;
                    locale?: string;
                    uid?: string;
                    requireCommentsApproval?: boolean;
                }[]): {
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
                };
                modifiedNestedNestedComments<T_5 extends "id" | "documentId" | "content" | "blocked" | "blockedThread" | "blockReason" | "isAdminComment" | "removed" | "approvalStatus" | "related" | "createdAt" | "updatedAt" | "publishedAt" | "authorId" | "authorName" | "authorEmail" | "authorAvatar" | "authorUser" | "locale" | "section" | "gotThread" | "threadFirstItemId" | "reports" | "author" | "threadOf">(id: import("./@types").Id, fieldName: T_5, value: {
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
                }[T_5], deepLimit?: number): Promise<boolean>;
                checkBadWords(content: string): Promise<string>;
                perRemove(related: string, locale?: string): Promise<import("@strapi/database/dist/types").CountResult>;
                registerLifecycleHook(): void;
                runLifecycleHook(): Promise<void>;
            };
            create({ relation, content, threadOf, author, approvalStatus, locale, section }: {
                content?: string;
                approvalStatus?: import("./const").APPROVAL_STATUS;
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
            }, user?: import("./@types").AdminUser): Promise<{
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
            update({ commentId, content, author, relation }: {
                content?: string;
                author?: {
                    name?: string;
                    id?: string | number;
                    email?: string;
                    avatar?: string;
                };
                relation?: `${string}::${string}.${string}`;
                commentId?: number;
            }, user?: import("./@types").AdminUser): Promise<{
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
            reportAbuse({ commentId, relation, ...payload }: {
                content?: string;
                reason?: import("./const").REPORT_REASON;
                relation?: `${string}::${string}.${string}`;
                commentId?: number;
            }, user?: import("./@types").AdminUser): Promise<{
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
            markAsRemoved({ commentId, relation, authorId }: {
                authorId?: string | number;
                relation?: `${string}::${string}.${string}`;
                commentId?: string | number;
            }, user: import("./@types").AdminUser): Promise<{
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
            sendAbuseReportEmail(reason: string, content: string): Promise<void>;
            markAsRemovedNested(commentId: string | number, status: boolean): Promise<boolean>;
            sendResponseNotification(entity: {
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
            }): Promise<void>;
        };
        common: ({ strapi }: import("./@types").StrapiContext) => {
            getConfig<T_3 extends string>(prop?: T_3, defaultValue?: import("./@types").PathValue<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
                };
                isGQLPluginEnabled?: boolean;
                gql?: {
                    auth?: boolean;
                };
                client?: {
                    url?: string;
                    contactEmail?: string;
                };
            }, T_3>, useLocal?: boolean): Promise<import("./@types").PathValue<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
                };
                isGQLPluginEnabled?: boolean;
                gql?: {
                    auth?: boolean;
                };
                client?: {
                    url?: string;
                    contactEmail?: string;
                };
            }, T_3>>;
            parseRelationString(relation: string): {
                uid: import("@strapi/types/dist/uid").ContentType;
                relatedId: string;
            };
            isValidUserContext<T_4 extends {
                id?: string | number;
            }>(user?: T_4): boolean;
            sanitizeCommentEntity(entity: {
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
            }, blockedAuthors: string[], omitProps?: ("id" | "documentId" | "content" | "blocked" | "blockedThread" | "blockReason" | "isAdminComment" | "removed" | "approvalStatus" | "related" | "createdAt" | "updatedAt" | "publishedAt" | "authorId" | "authorName" | "authorEmail" | "authorAvatar" | "authorUser" | "locale" | "section" | "gotThread" | "threadFirstItemId" | "reports" | "author" | "threadOf")[], populate?: any): {
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
            findAllFlat({ fields, limit, skip, sort, populate, omit: baseOmit, isAdmin, pagination, filters, locale, }: {
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
            }, relatedEntity?: any): Promise<{
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
            findAllInHierarchy({ filters, populate, sort, fields, startingFromId, dropBlockedThreads, isAdmin, omit, locale, limit, }: {
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
            }, relatedEntity?: any): Promise<{
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
            findOne(criteria: Partial<any>): Promise<{
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
            findMany(criteria: import("@strapi/database/dist/entity-manager").Params): Promise<{
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
            updateComment(criteria: Partial<any>, data: Partial<{
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
            findAllPerAuthor({ filters, populate, pagination, sort, fields, isAdmin, authorId, }: {
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
            }, isStrapiAuthor?: boolean): Promise<{
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
            findRelatedEntitiesFor(entries: {
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
            }[]): Promise<{
                id?: number;
                documentId?: string;
                locale?: string;
                uid?: string;
                requireCommentsApproval?: boolean;
            }[]>;
            mergeRelatedEntityTo(entity: {
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
            }, relatedEntities?: {
                id?: number;
                documentId?: string;
                locale?: string;
                uid?: string;
                requireCommentsApproval?: boolean;
            }[]): {
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
            };
            modifiedNestedNestedComments<T_5 extends "id" | "documentId" | "content" | "blocked" | "blockedThread" | "blockReason" | "isAdminComment" | "removed" | "approvalStatus" | "related" | "createdAt" | "updatedAt" | "publishedAt" | "authorId" | "authorName" | "authorEmail" | "authorAvatar" | "authorUser" | "locale" | "section" | "gotThread" | "threadFirstItemId" | "reports" | "author" | "threadOf">(id: import("./@types").Id, fieldName: T_5, value: {
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
            }[T_5], deepLimit?: number): Promise<boolean>;
            checkBadWords(content: string): Promise<string>;
            perRemove(related: string, locale?: string): Promise<import("@strapi/database/dist/types").CountResult>;
            registerLifecycleHook(): void;
            runLifecycleHook(): Promise<void>;
        };
        settings: ({ strapi }: import("./@types").StrapiContext) => {
            getConfig: (viaSettingsPage?: boolean) => Promise<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
            update: (config: {
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
                };
                isGQLPluginEnabled?: boolean;
                gql?: {
                    auth?: boolean;
                };
                client?: {
                    url?: string;
                    contactEmail?: string;
                };
            }) => Promise<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
            restore: () => Promise<{
                enabledCollections?: string[];
                approvalFlow?: string[];
                entryLabel?: Record<string, string[]>;
                moderatorRoles?: string[];
                badWords?: boolean;
                blockedAuthorProps?: string[];
                isValidationEnabled?: boolean;
                reportReasons?: {
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
                    BAD_LANGUAGE?: import("./const").REPORT_REASON.BAD_LANGUAGE;
                    DISCRIMINATION?: import("./const").REPORT_REASON.DISCRIMINATION;
                    OTHER?: import("./const").REPORT_REASON.OTHER;
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
            restart: () => void;
        };
        gql: ({ strapi }: import("./@types").StrapiContext) => {
            graphQLFiltersToStrapiQuery: (queryFilters: any, contentType?: any) => any;
            buildContentTypeFilters<T_6 extends import("@strapi/types/dist/uid").ContentType>(contentType: import("@strapi/types/dist/schema").ContentType<T_6>): import("nexus/dist/core").NexusInputObjectTypeDef<any>;
        };
    };
    contentTypes: {
        comment: {
            schema: {
                collectionName: string;
                info: {
                    tableName: string;
                    singularName: string;
                    pluralName: string;
                    displayName: string;
                    description: string;
                    kind: string;
                };
                options: {
                    draftAndPublish: boolean;
                };
                pluginOptions: {
                    "content-manager": {
                        visible: boolean;
                    };
                    "content-type-builder": {
                        visible: boolean;
                    };
                };
                attributes: {
                    content: {
                        type: string;
                        configurable: boolean;
                        required: boolean;
                    };
                    section: {
                        type: string;
                        configurable: boolean;
                        required: boolean;
                    };
                    blocked: {
                        type: string;
                        default: boolean;
                        configurable: boolean;
                    };
                    blockedThread: {
                        type: string;
                        default: boolean;
                        configurable: boolean;
                    };
                    blockReason: {
                        type: string;
                        configurable: boolean;
                    };
                    authorUser: {
                        type: string;
                        relation: string;
                        target: string;
                        configurable: boolean;
                    };
                    authorId: {
                        type: string;
                        configurable: boolean;
                    };
                    authorName: {
                        type: string;
                        configurable: boolean;
                    };
                    authorEmail: {
                        type: string;
                        configurable: boolean;
                    };
                    authorAvatar: {
                        type: string;
                        configurable: boolean;
                    };
                    isAdminComment: {
                        type: string;
                        configurable: boolean;
                    };
                    removed: {
                        type: string;
                        configurable: boolean;
                    };
                    approvalStatus: {
                        type: string;
                        enum: import("./const").APPROVAL_STATUS[];
                        configurable: boolean;
                    };
                    related: {
                        type: string;
                        configurable: boolean;
                    };
                    reports: {
                        type: string;
                        relation: string;
                        target: string;
                        mappedBy: string;
                        configurable: boolean;
                    };
                    threadOf: {
                        type: string;
                        relation: string;
                        target: string;
                        configurable: boolean;
                    };
                };
            };
        };
        'comment-report': {
            schema: {
                collectionName: string;
                info: {
                    tableName: string;
                    singularName: string;
                    pluralName: string;
                    displayName: string;
                    description: string;
                    kind: string;
                };
                options: {
                    draftAndPublish: boolean;
                };
                pluginOptions: {
                    "content-manager": {
                        visible: boolean;
                    };
                    "content-type-builder": {
                        visible: boolean;
                    };
                };
                attributes: {
                    content: {
                        type: string;
                        configurable: boolean;
                    };
                    reason: {
                        type: string;
                        enum: import("./const").REPORT_REASON[];
                        default: import("./const").REPORT_REASON;
                        configurable: boolean;
                        required: boolean;
                    };
                    resolved: {
                        type: string;
                        default: boolean;
                        configurable: boolean;
                    };
                    related: {
                        type: string;
                        relation: string;
                        target: string;
                        inversedBy: string;
                        configurable: boolean;
                    };
                };
            };
        };
    };
};
export default _default;
