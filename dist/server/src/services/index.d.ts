declare const pluginServices: {
    admin: ({ strapi }: import("../@types").StrapiContext) => {
        getCommonService(): {
            getConfig<T extends string>(prop?: T, defaultValue?: import("../@types").PathValue<{
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
            }, T>, useLocal?: boolean): Promise<import("../@types").PathValue<{
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
            }, T>>;
            parseRelationString(relation: string): {
                uid: import("@strapi/types/dist/uid").ContentType;
                relatedId: string;
            };
            isValidUserContext<T_1 extends {
                id?: string | number;
            }>(user?: T_1): boolean;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
                };
            }, blockedAuthors: string[], omitProps?: ("id" | "documentId" | "content" | "blocked" | "blockedThread" | "blockReason" | "isAdminComment" | "removed" | "approvalStatus" | "related" | "createdAt" | "updatedAt" | "publishedAt" | "authorId" | "authorName" | "authorEmail" | "authorAvatar" | "authorUser" | "locale" | "gotThread" | "threadFirstItemId" | "reports" | "author" | "entry" | "threadOf")[], populate?: any): {
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
                entry?: string;
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
                    entry?: string;
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
                    entry?: string;
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
                        entry?: string;
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
                    entry?: string;
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
                        entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                    entry?: string;
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
                        entry?: string;
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
                    entry?: string;
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
                        entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
                };
            };
            modifiedNestedNestedComments<T_2 extends "id" | "documentId" | "content" | "blocked" | "blockedThread" | "blockReason" | "isAdminComment" | "removed" | "approvalStatus" | "related" | "createdAt" | "updatedAt" | "publishedAt" | "authorId" | "authorName" | "authorEmail" | "authorAvatar" | "authorUser" | "locale" | "gotThread" | "threadFirstItemId" | "reports" | "author" | "entry" | "threadOf">(id: import("../@types").Id, fieldName: T_2, value: {
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
                entry?: string;
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
                    entry?: string;
                };
            }[T_2], deepLimit?: number): Promise<boolean>;
            checkBadWords(content: string): Promise<string>;
            perRemove(related: string, locale?: string): Promise<import("@strapi/database/dist/types").CountResult>;
            perRestore(related: string, locale?: string): Promise<import("@strapi/database/dist/types").CountResult>;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
                };
            }[];
        }>;
        changeBlockedComment(id: import("../@types").Id, forceStatus?: boolean): Promise<{
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
            entry?: string;
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
                entry?: string;
            };
        }>;
        deleteComment(id: import("../@types").Id): Promise<{
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
            entry?: string;
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
                entry?: string;
            };
        }>;
        blockCommentThread(id: import("../@types").Id, forceStatus?: boolean): Promise<{
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
            entry?: string;
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
                entry?: string;
            };
        }>;
        approveComment(id: import("../@types").Id): Promise<{
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
            entry?: string;
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
                entry?: string;
            };
        }>;
        rejectComment(id: import("../@types").Id): Promise<{
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
            entry?: string;
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
                entry?: string;
            };
        }>;
        blockNestedThreads(id: import("../@types").Id, status: boolean): Promise<boolean>;
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
        resolveAllAbuseReportsForComment(id: import("../@types").Id): Promise<import("@strapi/database/dist/types").CountResult>;
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
            entry?: string;
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
                entry?: string;
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
            entry?: string;
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
                entry?: string;
            };
        }>;
    };
    client: ({ strapi }: import("../@types").StrapiContext) => {
        getCommonService(): {
            getConfig<T extends string>(prop?: T, defaultValue?: import("../@types").PathValue<{
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
            }, T>, useLocal?: boolean): Promise<import("../@types").PathValue<{
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
            }, T>>;
            parseRelationString(relation: string): {
                uid: import("@strapi/types/dist/uid").ContentType;
                relatedId: string;
            };
            isValidUserContext<T_1 extends {
                id?: string | number;
            }>(user?: T_1): boolean;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
                };
            }, blockedAuthors: string[], omitProps?: ("id" | "documentId" | "content" | "blocked" | "blockedThread" | "blockReason" | "isAdminComment" | "removed" | "approvalStatus" | "related" | "createdAt" | "updatedAt" | "publishedAt" | "authorId" | "authorName" | "authorEmail" | "authorAvatar" | "authorUser" | "locale" | "gotThread" | "threadFirstItemId" | "reports" | "author" | "entry" | "threadOf")[], populate?: any): {
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
                entry?: string;
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
                    entry?: string;
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
                    entry?: string;
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
                        entry?: string;
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
                    entry?: string;
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
                        entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                    entry?: string;
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
                        entry?: string;
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
                    entry?: string;
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
                        entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
                };
            };
            modifiedNestedNestedComments<T_2 extends "id" | "documentId" | "content" | "blocked" | "blockedThread" | "blockReason" | "isAdminComment" | "removed" | "approvalStatus" | "related" | "createdAt" | "updatedAt" | "publishedAt" | "authorId" | "authorName" | "authorEmail" | "authorAvatar" | "authorUser" | "locale" | "gotThread" | "threadFirstItemId" | "reports" | "author" | "entry" | "threadOf">(id: import("../@types").Id, fieldName: T_2, value: {
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
                entry?: string;
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
                    entry?: string;
                };
            }[T_2], deepLimit?: number): Promise<boolean>;
            checkBadWords(content: string): Promise<string>;
            perRemove(related: string, locale?: string): Promise<import("@strapi/database/dist/types").CountResult>;
            perRestore(related: string, locale?: string): Promise<import("@strapi/database/dist/types").CountResult>;
            registerLifecycleHook(): void;
            runLifecycleHook(): Promise<void>;
        };
        create({ relation, content, threadOf, author, approvalStatus, locale, entry }: {
            content?: string;
            approvalStatus?: import("../const").APPROVAL_STATUS;
            locale?: string;
            author?: {
                name?: string;
                id?: string | number;
                email?: string;
                avatar?: string;
            };
            entry?: string;
            threadOf?: string | number;
            relation?: `${string}::${string}.${string}`;
        }, user?: import("../@types").AdminUser): Promise<{
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
            entry?: string;
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
                entry?: string;
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
        }, user?: import("../@types").AdminUser): Promise<{
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
            entry?: string;
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
                entry?: string;
            };
        }>;
        reportAbuse({ commentId, relation, ...payload }: {
            content?: string;
            reason?: import("../const").REPORT_REASON;
            relation?: `${string}::${string}.${string}`;
            commentId?: number;
        }, user?: import("../@types").AdminUser): Promise<{
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
                entry?: string;
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
                    entry?: string;
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
        }, user: import("../@types").AdminUser): Promise<{
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
            entry?: string;
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
                entry?: string;
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
            entry?: string;
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
                entry?: string;
            };
        }): Promise<void>;
    };
    common: ({ strapi }: import("../@types").StrapiContext) => {
        getConfig<T extends string>(prop?: T, defaultValue?: import("../@types").PathValue<{
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
        }, T>, useLocal?: boolean): Promise<import("../@types").PathValue<{
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
        }, T>>;
        parseRelationString(relation: string): {
            uid: import("@strapi/types/dist/uid").ContentType;
            relatedId: string;
        };
        isValidUserContext<T_1 extends {
            id?: string | number;
        }>(user?: T_1): boolean;
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
            entry?: string;
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
                entry?: string;
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
            entry?: string;
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
                entry?: string;
            };
        }, blockedAuthors: string[], omitProps?: ("id" | "documentId" | "content" | "blocked" | "blockedThread" | "blockReason" | "isAdminComment" | "removed" | "approvalStatus" | "related" | "createdAt" | "updatedAt" | "publishedAt" | "authorId" | "authorName" | "authorEmail" | "authorAvatar" | "authorUser" | "locale" | "gotThread" | "threadFirstItemId" | "reports" | "author" | "entry" | "threadOf")[], populate?: any): {
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
            entry?: string;
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
                entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
            entry?: string;
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
                entry?: string;
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
            entry?: string;
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
                entry?: string;
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
            entry?: string;
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
                entry?: string;
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
            entry?: string;
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
                entry?: string;
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
            entry?: string;
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
                entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
                entry?: string;
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
                    entry?: string;
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
            entry?: string;
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
                entry?: string;
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
            entry?: string;
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
                entry?: string;
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
            entry?: string;
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
                entry?: string;
            };
        };
        modifiedNestedNestedComments<T_2 extends "id" | "documentId" | "content" | "blocked" | "blockedThread" | "blockReason" | "isAdminComment" | "removed" | "approvalStatus" | "related" | "createdAt" | "updatedAt" | "publishedAt" | "authorId" | "authorName" | "authorEmail" | "authorAvatar" | "authorUser" | "locale" | "gotThread" | "threadFirstItemId" | "reports" | "author" | "entry" | "threadOf">(id: import("../@types").Id, fieldName: T_2, value: {
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
            entry?: string;
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
                entry?: string;
            };
        }[T_2], deepLimit?: number): Promise<boolean>;
        checkBadWords(content: string): Promise<string>;
        perRemove(related: string, locale?: string): Promise<import("@strapi/database/dist/types").CountResult>;
        perRestore(related: string, locale?: string): Promise<import("@strapi/database/dist/types").CountResult>;
        registerLifecycleHook(): void;
        runLifecycleHook(): Promise<void>;
    };
    settings: ({ strapi }: import("../@types").StrapiContext) => {
        getConfig: (viaSettingsPage?: boolean) => Promise<{
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
        update: (config: {
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
        }) => Promise<{
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
        restore: () => Promise<{
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
        restart: () => void;
    };
    gql: ({ strapi }: import("../@types").StrapiContext) => {
        graphQLFiltersToStrapiQuery: (queryFilters: any, contentType?: any) => any;
        buildContentTypeFilters<T_3 extends import("@strapi/types/dist/uid").ContentType>(contentType: import("@strapi/types/dist/schema").ContentType<T_3>): import("nexus/dist/core").NexusInputObjectTypeDef<any>;
    };
};
export type PluginServices = {
    [key in keyof typeof pluginServices]: ReturnType<typeof pluginServices[key]>;
};
export default pluginServices;
