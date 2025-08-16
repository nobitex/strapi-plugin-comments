import { getFetchClient } from '@strapi/strapi/admin';
import { User } from './schemas';
export type ApiClient = ReturnType<typeof getApiClient>;
export declare const getApiClient: (fetch: ReturnType<typeof getFetchClient>) => {
    config: {
        getKey(): string[];
        query(): Promise<{
            entryLabel: Record<string, string[]>;
            approvalFlow: string[];
            blockedAuthorProps: string[];
            reportReasons: Record<string, string>;
            regex: {
                uid: string;
                relatedUid: string;
                email: string;
                sorting: string;
            };
            enabledCollections: string[];
            moderatorRoles: string[];
            isGQLPluginEnabled: boolean;
            client: {
                url: string | null;
                contactEmail: string | null;
            };
            badWords?: boolean | null | undefined;
            gql?: {
                auth: boolean | null;
            } | undefined;
        }>;
    };
    contentTypeBuilder: {
        single: {
            getKey(uid: string, canAccess: boolean): (string | boolean)[];
            query(uid: string): Promise<{
                uid: string;
                apiID: string;
                schema: {
                    attributes: Record<string, {
                        type: string;
                    }>;
                    collectionName: string;
                    description: string;
                    displayName: string;
                    draftAndPublish: boolean;
                    kind: string;
                    pluralName: string;
                    singularName: string;
                    visible: boolean;
                };
            }>;
        };
        all: {
            getKey(): string[];
            query(): Promise<{
                uid: string;
                apiID: string;
                schema: {
                    attributes: Record<string, {
                        type: string;
                    }>;
                    collectionName: string;
                    description: string;
                    displayName: string;
                    draftAndPublish: boolean;
                    kind: string;
                    pluralName: string;
                    singularName: string;
                    visible: boolean;
                };
            }[]>;
        };
    };
    roles: {
        getKey(): string[];
        query(): Promise<{
            code: string;
            id: number;
            documentId: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            locale: string | null;
            name: string;
            description: string;
            usersCount: number;
        }[]>;
    };
    user: {
        getKey(): string[];
        query(): Promise<{
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
        }>;
    };
    comments: {
        findAll: {
            getKey(queryParams?: Record<string, string>): string[];
            query(queryParams: Record<string, any>): Promise<{
                pagination: {
                    page: number;
                    pageSize: number;
                    pageCount: number;
                    total: number;
                };
                result: import("./schemas").Comment[];
            }>;
        };
        findOne: {
            getKey(id?: number | string, filters?: any): string[];
            query(id: number | string, filters: any): Promise<{
                entity: {
                    uid: string;
                    id: number;
                    documentId: string;
                    createdAt: string;
                    updatedAt: string;
                    publishedAt: string | null;
                    locale?: string | null | undefined;
                } & Record<string, unknown>;
                selected: {
                    id: number;
                    createdAt: string;
                    updatedAt: string;
                    content: string;
                    blocked: boolean | null;
                    blockedThread: boolean | null;
                    blockReason: string | null;
                    isAdminComment: boolean | null;
                    removed: boolean | null;
                    approvalStatus: "PENDING" | "APPROVED" | "REJECTED" | "BLOCKED" | "OPEN" | "REMOVED" | "TO_REVIEW" | "UNKNOWN" | null;
                    author: {
                        email: string;
                        id: string | number;
                        name?: string | null | undefined;
                        avatar?: string | {
                            url: string;
                        } | {
                            url: string;
                            formats: {
                                thumbnail: {
                                    url: string;
                                } | null;
                            };
                        } | null | undefined;
                    };
                    related: string;
                    reports?: {
                        resolved: boolean;
                        id: number;
                        createdAt: string;
                        updatedAt: string | null;
                        content: string;
                        reason?: string | null | undefined;
                    }[] | null | undefined;
                    gotThread?: boolean | null | undefined;
                    threadFirstItemId?: number | null | undefined;
                    section?: string | null | undefined;
                    threadOf?: {
                        id: number;
                        documentId: string;
                        createdAt: string;
                        updatedAt: string;
                        content: string;
                        blocked: boolean | null;
                        blockedThread: boolean | null;
                        blockReason: string | null;
                        isAdminComment: boolean | null;
                        removed: boolean | null;
                        approvalStatus: "PENDING" | "APPROVED" | "REJECTED" | "BLOCKED" | "OPEN" | "REMOVED" | "TO_REVIEW" | "UNKNOWN" | null;
                        author: {
                            email: string;
                            id: string | number;
                            name?: string | null | undefined;
                            avatar?: string | {
                                url: string;
                            } | {
                                url: string;
                                formats: {
                                    thumbnail: {
                                        url: string;
                                    } | null;
                                };
                            } | null | undefined;
                        };
                        related: string;
                        reports?: {
                            resolved: boolean;
                            id: number;
                            createdAt: string;
                            updatedAt: string | null;
                            content: string;
                            reason?: string | null | undefined;
                        }[] | null | undefined;
                        gotThread?: boolean | null | undefined;
                        threadFirstItemId?: number | null | undefined;
                        section?: string | null | undefined;
                        threadOf?: {
                            id: number;
                            createdAt: string;
                            updatedAt: string;
                            content: string;
                            blocked: boolean | null;
                            blockedThread: boolean | null;
                            blockReason: string | null;
                            isAdminComment: boolean | null;
                            removed: boolean | null;
                            approvalStatus: "PENDING" | "APPROVED" | "REJECTED" | "BLOCKED" | "OPEN" | "REMOVED" | "TO_REVIEW" | "UNKNOWN" | null;
                            author: {
                                email: string;
                                id: string | number;
                                name?: string | null | undefined;
                                avatar?: string | {
                                    url: string;
                                } | {
                                    url: string;
                                    formats: {
                                        thumbnail: {
                                            url: string;
                                        } | null;
                                    };
                                } | null | undefined;
                            };
                            related: string;
                            documentId?: string | undefined;
                            reports?: {
                                resolved: boolean;
                                id: number;
                                createdAt: string;
                                updatedAt: string | null;
                                content: string;
                                reason?: string | null | undefined;
                            }[] | null | undefined;
                            gotThread?: boolean | null | undefined;
                            threadFirstItemId?: number | null | undefined;
                            section?: string | null | undefined;
                            threadOf?: import("./schemas").Comment | null | undefined;
                        } | null | undefined;
                    } | null | undefined;
                } | null;
                level: {
                    id: number;
                    documentId: string;
                    createdAt: string;
                    updatedAt: string;
                    content: string;
                    blocked: boolean | null;
                    blockedThread: boolean | null;
                    blockReason: string | null;
                    isAdminComment: boolean | null;
                    removed: boolean | null;
                    approvalStatus: "PENDING" | "APPROVED" | "REJECTED" | "BLOCKED" | "OPEN" | "REMOVED" | "TO_REVIEW" | "UNKNOWN" | null;
                    author: {
                        email: string;
                        id: string | number;
                        name?: string | null | undefined;
                        avatar?: string | {
                            url: string;
                        } | {
                            url: string;
                            formats: {
                                thumbnail: {
                                    url: string;
                                } | null;
                            };
                        } | null | undefined;
                    };
                    reports?: {
                        resolved: boolean;
                        id: number;
                        createdAt: string;
                        updatedAt: string | null;
                        content: string;
                        reason?: string | null | undefined;
                    }[] | null | undefined;
                    gotThread?: boolean | null | undefined;
                    threadFirstItemId?: number | null | undefined;
                    section?: string | null | undefined;
                }[];
            }>;
        };
        approve(id: number): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
        reject(id: number): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
        block(id: number): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
        unblock(id: number): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
        blockThread(id: number): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
        unBlockThread(id: number): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
        delete(id: number): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
        postComment({ id, content, author }: {
            id: number | string;
            content: string;
            author: User;
        }): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
        updateComment({ id, content }: {
            id: number | string;
            content: string;
        }): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
    };
    reports: {
        findAll: {
            getKey(queryParams?: Record<string, string>): string[];
            query(queryParams?: Record<string, string>): Promise<{
                pagination: {
                    page: number;
                    pageSize: number;
                    pageCount: number;
                    total: number;
                };
                result: {
                    id: number;
                    createdAt: string;
                    updatedAt: string | null;
                    content: string;
                    reports: unknown[];
                    related: {
                        id: number;
                        createdAt: string;
                        updatedAt: string;
                        content: string;
                        blocked: boolean | null;
                        blockedThread: boolean | null;
                        blockReason: string | null;
                        isAdminComment: boolean | null;
                        removed: boolean | null;
                        approvalStatus: "PENDING" | "APPROVED" | "REJECTED" | "BLOCKED" | "OPEN" | "REMOVED" | "TO_REVIEW" | "UNKNOWN" | null;
                        author: {
                            email: string;
                            id: string | number;
                            name?: string | null | undefined;
                            avatar?: string | {
                                url: string;
                            } | {
                                url: string;
                                formats: {
                                    thumbnail: {
                                        url: string;
                                    } | null;
                                };
                            } | null | undefined;
                        };
                        reports?: {
                            resolved: boolean;
                            id: number;
                            createdAt: string;
                            updatedAt: string | null;
                            content: string;
                            reason?: string | null | undefined;
                        }[] | null | undefined;
                        gotThread?: boolean | null | undefined;
                        threadFirstItemId?: number | null | undefined;
                        section?: string | null | undefined;
                    };
                    resolved?: boolean | undefined;
                    reason?: string | null | undefined;
                    approvalStatus?: "PENDING" | "APPROVED" | "REJECTED" | "BLOCKED" | "OPEN" | "REMOVED" | "TO_REVIEW" | "UNKNOWN" | null | undefined;
                    author?: unknown;
                }[];
            }>;
        };
        resolve({ id, reportId }: {
            id: number;
            reportId: number;
        }): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
        resolveMultipleReports({ reportIds }: {
            reportIds: number[];
        }): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
        resolveCommentMultipleReports({ id, reportIds }: {
            id: number;
            reportIds: number[];
        }): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
        resolveAllAbuseReportsForComment(id: number): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
        resolveAllAbuseReportsForThread(id: number): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
    };
    settings: {
        update(body: any): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
        restore(): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
        restart(): Promise<import("@strapi/strapi/admin").FetchResponse<any>>;
    };
};
