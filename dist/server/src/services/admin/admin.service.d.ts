import { Id, StrapiContext } from '../../@types';
import { admin as adminValidator } from '../../validators/api';
declare const _default: ({ strapi }: StrapiContext) => {
    getCommonService(): {
        getConfig<T extends string>(prop?: T, defaultValue?: import("../../@types").PathValue<{
            enabledCollections?: string[];
            approvalFlow?: string[];
            entryLabel?: Record<string, string[]>;
            moderatorRoles?: string[];
            badWords?: boolean;
            blockedAuthorProps?: string[];
            isValidationEnabled?: boolean;
            reportReasons?: {
                BAD_LANGUAGE?: import("../../const").REPORT_REASON.BAD_LANGUAGE;
                DISCRIMINATION?: import("../../const").REPORT_REASON.DISCRIMINATION;
                OTHER?: import("../../const").REPORT_REASON.OTHER;
            };
            isGQLPluginEnabled?: boolean;
            emailEnabled?: boolean;
            gql?: {
                auth?: boolean;
            };
            client?: {
                url?: string;
                contactEmail?: string;
            };
        }, T>, useLocal?: boolean): Promise<import("../../@types").PathValue<{
            enabledCollections?: string[];
            approvalFlow?: string[];
            entryLabel?: Record<string, string[]>;
            moderatorRoles?: string[];
            badWords?: boolean;
            blockedAuthorProps?: string[];
            isValidationEnabled?: boolean;
            reportReasons?: {
                BAD_LANGUAGE?: import("../../const").REPORT_REASON.BAD_LANGUAGE;
                DISCRIMINATION?: import("../../const").REPORT_REASON.DISCRIMINATION;
                OTHER?: import("../../const").REPORT_REASON.OTHER;
            };
            isGQLPluginEnabled?: boolean;
            emailEnabled?: boolean;
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
                section?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
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
                    section?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
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
                    section?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
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
        findAllInHierarchy({ filters, populate, sort, fields, startingFromId, dropBlockedThreads, isAdmin, omit, locale, limit, pagination, }: {
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
                section?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
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
                    section?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
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
                    section?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
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
            data: any[];
            pagination: {
                page?: number;
                pageSize?: number;
                pageCount?: number;
                total?: number;
            };
        }>;
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
                section?: string | number | {
                    $eq?: string;
                } | {
                    $eqi?: string;
                } | {
                    $ne?: string;
                } | {
                    $nei?: string;
                } | {
                    $gt?: string;
                } | {
                    $gte?: string;
                } | {
                    $lt?: string;
                } | {
                    $lte?: string;
                } | {
                    $startsWith?: string;
                } | {
                    $startsWithi?: string;
                } | {
                    $endsWith?: string;
                } | {
                    $endsWithi?: string;
                } | {
                    $contains?: string;
                } | {
                    $containsi?: string;
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
                    section?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
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
                    section?: string | number | {
                        $eq?: string;
                    } | {
                        $eqi?: string;
                    } | {
                        $ne?: string;
                    } | {
                        $nei?: string;
                    } | {
                        $gt?: string;
                    } | {
                        $gte?: string;
                    } | {
                        $lt?: string;
                    } | {
                        $lte?: string;
                    } | {
                        $startsWith?: string;
                    } | {
                        $startsWithi?: string;
                    } | {
                        $endsWith?: string;
                    } | {
                        $endsWithi?: string;
                    } | {
                        $contains?: string;
                    } | {
                        $containsi?: string;
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
        modifiedNestedNestedComments<T_2 extends "id" | "documentId" | "content" | "blocked" | "blockedThread" | "blockReason" | "isAdminComment" | "removed" | "approvalStatus" | "related" | "createdAt" | "updatedAt" | "publishedAt" | "authorId" | "authorName" | "authorEmail" | "authorAvatar" | "authorUser" | "locale" | "section" | "gotThread" | "threadFirstItemId" | "reports" | "author" | "threadOf">(id: Id, fieldName: T_2, value: {
            id?: number;
            documentId?: string;
            content?: string;
            blocked?: boolean;
            blockedThread?: boolean;
            blockReason?: string;
            isAdminComment?: boolean;
            removed?: boolean;
            approvalStatus?: string;
            related?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
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
        }[T_2], deepLimit?: number): Promise<boolean>;
        checkBadWords(content: string): Promise<string>;
        perRemove(related: string, locale?: string): Promise<import("@strapi/database/dist/types").CountResult>;
        registerLifecycleHook(): void;
        runLifecycleHook(): Promise<void>;
    };
    findAll({ _q, orderBy, page, pageSize, filters }: adminValidator.CommentFindAllSchema): Promise<{
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
    findReports({ _q, orderBy, page, pageSize }: adminValidator.ReportFindReportsValidator): Promise<{
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
    findOneAndThread({ id, removed, ...query }: adminValidator.FindOneValidatorSchema): Promise<{
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
        level: any[];
    }>;
    changeBlockedComment(id: Id, forceStatus?: boolean): Promise<{
        id?: number;
        documentId?: string;
        content?: string;
        blocked?: boolean;
        blockedThread?: boolean;
        blockReason?: string;
        isAdminComment?: boolean;
        removed?: boolean;
        approvalStatus?: string;
        related?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
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
    deleteComment(id: Id): Promise<{
        id?: number;
        documentId?: string;
        content?: string;
        blocked?: boolean;
        blockedThread?: boolean;
        blockReason?: string;
        isAdminComment?: boolean;
        removed?: boolean;
        approvalStatus?: string;
        related?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
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
    blockCommentThread(id: Id, forceStatus?: boolean): Promise<{
        id?: number;
        documentId?: string;
        content?: string;
        blocked?: boolean;
        blockedThread?: boolean;
        blockReason?: string;
        isAdminComment?: boolean;
        removed?: boolean;
        approvalStatus?: string;
        related?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
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
    approveComment(id: Id): Promise<{
        id?: number;
        documentId?: string;
        content?: string;
        blocked?: boolean;
        blockedThread?: boolean;
        blockReason?: string;
        isAdminComment?: boolean;
        removed?: boolean;
        approvalStatus?: string;
        related?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
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
    rejectComment(id: Id): Promise<{
        id?: number;
        documentId?: string;
        content?: string;
        blocked?: boolean;
        blockedThread?: boolean;
        blockReason?: string;
        isAdminComment?: boolean;
        removed?: boolean;
        approvalStatus?: string;
        related?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
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
    blockNestedThreads(id: Id, status: boolean): Promise<boolean>;
    resolveAbuseReport({ id: commentId, reportId, }: adminValidator.CommentResolveAbuseReportValidatorSchema): Promise<{
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
    resolveCommentMultipleAbuseReports({ id: commentId, reportIds: ids, }: adminValidator.CommentResolveMultipleAbuseReportsValidatorSchema): Promise<import("@strapi/database/dist/types").CountResult>;
    resolveAllAbuseReportsForComment(id: Id): Promise<import("@strapi/database/dist/types").CountResult>;
    resolveAllAbuseReportsForThread(commentId: number): Promise<import("@strapi/database/dist/types").CountResult>;
    resolveMultipleAbuseReports({ reportIds, }: adminValidator.ReportsMultipleAbuseValidator): Promise<import("@strapi/database/dist/types").CountResult>;
    postComment({ id, author, content }: adminValidator.CommentPostValidatorSchema): Promise<{
        id?: number;
        documentId?: string;
        content?: string;
        blocked?: boolean;
        blockedThread?: boolean;
        blockReason?: string;
        isAdminComment?: boolean;
        removed?: boolean;
        approvalStatus?: string;
        related?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
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
    updateComment({ id, content }: adminValidator.UpdateCommentValidatorSchema): Promise<{
        id?: number;
        documentId?: string;
        content?: string;
        blocked?: boolean;
        blockedThread?: boolean;
        blockReason?: string;
        isAdminComment?: boolean;
        removed?: boolean;
        approvalStatus?: string;
        related?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
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
export default _default;
