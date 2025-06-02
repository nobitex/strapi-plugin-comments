import { AdminUser, StrapiContext } from '../@types';
import { client } from '../validators/api';
import { Comment } from '../validators/repositories';
/**
 * Comments Plugin - Client services
 */
export declare const clientService: ({ strapi }: StrapiContext) => {
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
    create({ relation, content, threadOf, author, approvalStatus, locale, entry }: client.NewCommentValidatorSchema, user?: AdminUser): Promise<{
        id?: number;
        documentId?: string;
        content?: string;
        blocked?: boolean;
        blockedThread?: boolean;
        blockReason?: string;
        isAdminComment?: boolean;
        removed?: boolean;
        approvalStatus?: string;
        related?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
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
    update({ commentId, content, author, relation }: client.UpdateCommentValidatorSchema, user?: AdminUser): Promise<{
        id?: number;
        documentId?: string;
        content?: string;
        blocked?: boolean;
        blockedThread?: boolean;
        blockReason?: string;
        isAdminComment?: boolean;
        removed?: boolean;
        approvalStatus?: string;
        related?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
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
    reportAbuse({ commentId, relation, ...payload }: client.ReportAbuseValidatorSchema, user?: AdminUser): Promise<{
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
    markAsRemoved({ commentId, relation, authorId }: client.RemoveCommentValidatorSchema, user: AdminUser): Promise<{
        id?: number;
        documentId?: string;
        content?: string;
        blocked?: boolean;
        blockedThread?: boolean;
        blockReason?: string;
        isAdminComment?: boolean;
        removed?: boolean;
        approvalStatus?: string;
        related?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
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
    sendResponseNotification(entity: Comment): Promise<void>;
};
export default clientService;
