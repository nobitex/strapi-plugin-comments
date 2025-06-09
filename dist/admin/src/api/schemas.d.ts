import { z } from 'zod';
export declare const configSchema: z.ZodObject<{
    entryLabel: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>;
    approvalFlow: z.ZodArray<z.ZodString, "many">;
    blockedAuthorProps: z.ZodArray<z.ZodString, "many">;
    reportReasons: z.ZodObject<{
        BAD_LANGUAGE: z.ZodLiteral<"BAD_LANGUAGE">;
        DISCRIMINATION: z.ZodLiteral<"DISCRIMINATION">;
        OTHER: z.ZodLiteral<"OTHER">;
    }, "strip", z.ZodTypeAny, {
        BAD_LANGUAGE: "BAD_LANGUAGE";
        DISCRIMINATION: "DISCRIMINATION";
        OTHER: "OTHER";
    }, {
        BAD_LANGUAGE: "BAD_LANGUAGE";
        DISCRIMINATION: "DISCRIMINATION";
        OTHER: "OTHER";
    }>;
    regex: z.ZodObject<{
        uid: z.ZodString;
        relatedUid: z.ZodString;
        email: z.ZodString;
        sorting: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        uid: string;
        relatedUid: string;
        email: string;
        sorting: string;
    }, {
        uid: string;
        relatedUid: string;
        email: string;
        sorting: string;
    }>;
    enabledCollections: z.ZodArray<z.ZodString, "many">;
    moderatorRoles: z.ZodArray<z.ZodString, "many">;
    isGQLPluginEnabled: z.ZodBoolean;
    badWords: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    gql: z.ZodOptional<z.ZodObject<{
        auth: z.ZodNullable<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        auth: boolean | null;
    }, {
        auth: boolean | null;
    }>>;
    client: z.ZodDefault<z.ZodObject<{
        url: z.ZodNullable<z.ZodString>;
        contactEmail: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string | null;
        contactEmail: string | null;
    }, {
        url: string | null;
        contactEmail: string | null;
    }>>;
}, "strip", z.ZodTypeAny, {
    entryLabel: Record<string, string[]>;
    approvalFlow: string[];
    blockedAuthorProps: string[];
    reportReasons: {
        BAD_LANGUAGE: "BAD_LANGUAGE";
        DISCRIMINATION: "DISCRIMINATION";
        OTHER: "OTHER";
    };
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
}, {
    entryLabel: Record<string, string[]>;
    approvalFlow: string[];
    blockedAuthorProps: string[];
    reportReasons: {
        BAD_LANGUAGE: "BAD_LANGUAGE";
        DISCRIMINATION: "DISCRIMINATION";
        OTHER: "OTHER";
    };
    regex: {
        uid: string;
        relatedUid: string;
        email: string;
        sorting: string;
    };
    enabledCollections: string[];
    moderatorRoles: string[];
    isGQLPluginEnabled: boolean;
    badWords?: boolean | null | undefined;
    gql?: {
        auth: boolean | null;
    } | undefined;
    client?: {
        url: string | null;
        contactEmail: string | null;
    } | undefined;
}>;
export type Config = z.infer<typeof configSchema>;
declare const relatedSchema: z.ZodIntersection<z.ZodObject<{
    id: z.ZodNumber;
    uid: z.ZodString;
    documentId: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    publishedAt: z.ZodNullable<z.ZodString>;
    locale: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    uid: string;
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    locale?: string | null | undefined;
}, {
    uid: string;
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    locale?: string | null | undefined;
}>, z.ZodRecord<z.ZodString, z.ZodUnknown>>;
declare const authorSchema: z.ZodObject<{
    id: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
    name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    email: z.ZodString;
    avatar: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>, z.ZodObject<{
        url: z.ZodString;
        formats: z.ZodObject<{
            thumbnail: z.ZodNullable<z.ZodObject<{
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
            }, {
                url: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            thumbnail: {
                url: string;
            } | null;
        }, {
            thumbnail: {
                url: string;
            } | null;
        }>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        formats: {
            thumbnail: {
                url: string;
            } | null;
        };
    }, {
        url: string;
        formats: {
            thumbnail: {
                url: string;
            } | null;
        };
    }>, z.ZodString]>>>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export type Author = z.infer<typeof authorSchema>;
declare const commentReportSchema: z.ZodObject<{
    id: z.ZodNumber;
    reason: z.ZodUnion<[z.ZodLiteral<"BAD_LANGUAGE">, z.ZodLiteral<"DISCRIMINATION">, z.ZodLiteral<"OTHER">]>;
    content: z.ZodString;
    resolved: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    resolved: boolean;
    id: number;
    createdAt: string;
    updatedAt: string | null;
    reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
    content: string;
}, {
    resolved: boolean;
    id: number;
    createdAt: string;
    updatedAt: string | null;
    reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
    content: string;
}>;
declare const baseCommentSchema: z.ZodObject<{
    id: z.ZodNumber;
    content: z.ZodString;
    blocked: z.ZodNullable<z.ZodBoolean>;
    blockedThread: z.ZodNullable<z.ZodBoolean>;
    blockReason: z.ZodNullable<z.ZodString>;
    isAdminComment: z.ZodNullable<z.ZodBoolean>;
    removed: z.ZodNullable<z.ZodBoolean>;
    approvalStatus: z.ZodNullable<z.ZodUnion<[z.ZodLiteral<"PENDING">, z.ZodLiteral<"APPROVED">, z.ZodLiteral<"REJECTED">, z.ZodLiteral<"BLOCKED">, z.ZodLiteral<"OPEN">, z.ZodLiteral<"REMOVED">, z.ZodLiteral<"TO_REVIEW">, z.ZodLiteral<"UNKNOWN">]>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    reports: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        reason: z.ZodUnion<[z.ZodLiteral<"BAD_LANGUAGE">, z.ZodLiteral<"DISCRIMINATION">, z.ZodLiteral<"OTHER">]>;
        content: z.ZodString;
        resolved: z.ZodBoolean;
        createdAt: z.ZodString;
        updatedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        resolved: boolean;
        id: number;
        createdAt: string;
        updatedAt: string | null;
        reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
        content: string;
    }, {
        resolved: boolean;
        id: number;
        createdAt: string;
        updatedAt: string | null;
        reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
        content: string;
    }>, "many">>>;
    author: z.ZodObject<{
        id: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
        name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        email: z.ZodString;
        avatar: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
        }, {
            url: string;
        }>, z.ZodObject<{
            url: z.ZodString;
            formats: z.ZodObject<{
                thumbnail: z.ZodNullable<z.ZodObject<{
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                }, {
                    url: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                thumbnail: {
                    url: string;
                } | null;
            }, {
                thumbnail: {
                    url: string;
                } | null;
            }>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            formats: {
                thumbnail: {
                    url: string;
                } | null;
            };
        }, {
            url: string;
            formats: {
                thumbnail: {
                    url: string;
                } | null;
            };
        }>, z.ZodString]>>>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
    gotThread: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    threadFirstItemId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    section: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
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
        reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
        content: string;
    }[] | null | undefined;
    gotThread?: boolean | null | undefined;
    threadFirstItemId?: number | null | undefined;
    section?: string | undefined;
}, {
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
        reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
        content: string;
    }[] | null | undefined;
    gotThread?: boolean | null | undefined;
    threadFirstItemId?: number | null | undefined;
    section?: string | undefined;
}>;
type BaseComment = z.infer<typeof baseCommentSchema>;
export type CommentReport = z.infer<typeof commentReportSchema>;
export type Comment = BaseComment & {
    threadOf?: Comment | null;
    related?: z.infer<typeof relatedSchema> | string;
    documentId?: string;
};
export declare const commentsSchema: z.ZodObject<{
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        pageSize: z.ZodNumber;
        pageCount: z.ZodNumber;
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }, {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }>;
    result: z.ZodArray<z.ZodType<Comment, z.ZodTypeDef, Comment>, "many">;
}, "strip", z.ZodTypeAny, {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
    result: Comment[];
}, {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
    result: Comment[];
}>;
export declare const commentDetailsSchema: z.ZodObject<{
    entity: z.ZodIntersection<z.ZodObject<{
        id: z.ZodNumber;
        uid: z.ZodString;
        documentId: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        publishedAt: z.ZodNullable<z.ZodString>;
        locale: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        uid: string;
        id: number;
        documentId: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        locale?: string | null | undefined;
    }, {
        uid: string;
        id: number;
        documentId: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        locale?: string | null | undefined;
    }>, z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    selected: z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        content: z.ZodString;
        blocked: z.ZodNullable<z.ZodBoolean>;
        blockedThread: z.ZodNullable<z.ZodBoolean>;
        blockReason: z.ZodNullable<z.ZodString>;
        isAdminComment: z.ZodNullable<z.ZodBoolean>;
        removed: z.ZodNullable<z.ZodBoolean>;
        approvalStatus: z.ZodNullable<z.ZodUnion<[z.ZodLiteral<"PENDING">, z.ZodLiteral<"APPROVED">, z.ZodLiteral<"REJECTED">, z.ZodLiteral<"BLOCKED">, z.ZodLiteral<"OPEN">, z.ZodLiteral<"REMOVED">, z.ZodLiteral<"TO_REVIEW">, z.ZodLiteral<"UNKNOWN">]>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        reports: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            reason: z.ZodUnion<[z.ZodLiteral<"BAD_LANGUAGE">, z.ZodLiteral<"DISCRIMINATION">, z.ZodLiteral<"OTHER">]>;
            content: z.ZodString;
            resolved: z.ZodBoolean;
            createdAt: z.ZodString;
            updatedAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            resolved: boolean;
            id: number;
            createdAt: string;
            updatedAt: string | null;
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }, {
            resolved: boolean;
            id: number;
            createdAt: string;
            updatedAt: string | null;
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }>, "many">>>;
        author: z.ZodObject<{
            id: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
            name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            email: z.ZodString;
            avatar: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
            }, {
                url: string;
            }>, z.ZodObject<{
                url: z.ZodString;
                formats: z.ZodObject<{
                    thumbnail: z.ZodNullable<z.ZodObject<{
                        url: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                    }, {
                        url: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    thumbnail: {
                        url: string;
                    } | null;
                }, {
                    thumbnail: {
                        url: string;
                    } | null;
                }>;
            }, "strip", z.ZodTypeAny, {
                url: string;
                formats: {
                    thumbnail: {
                        url: string;
                    } | null;
                };
            }, {
                url: string;
                formats: {
                    thumbnail: {
                        url: string;
                    } | null;
                };
            }>, z.ZodString]>>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>;
        gotThread: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        threadFirstItemId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        section: z.ZodOptional<z.ZodString>;
    } & {
        related: z.ZodString;
        threadOf: z.ZodOptional<z.ZodNullable<z.ZodObject<Omit<{
            id: z.ZodNumber;
            content: z.ZodString;
            blocked: z.ZodNullable<z.ZodBoolean>;
            blockedThread: z.ZodNullable<z.ZodBoolean>;
            blockReason: z.ZodNullable<z.ZodString>;
            isAdminComment: z.ZodNullable<z.ZodBoolean>;
            removed: z.ZodNullable<z.ZodBoolean>;
            approvalStatus: z.ZodNullable<z.ZodUnion<[z.ZodLiteral<"PENDING">, z.ZodLiteral<"APPROVED">, z.ZodLiteral<"REJECTED">, z.ZodLiteral<"BLOCKED">, z.ZodLiteral<"OPEN">, z.ZodLiteral<"REMOVED">, z.ZodLiteral<"TO_REVIEW">, z.ZodLiteral<"UNKNOWN">]>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            reports: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                reason: z.ZodUnion<[z.ZodLiteral<"BAD_LANGUAGE">, z.ZodLiteral<"DISCRIMINATION">, z.ZodLiteral<"OTHER">]>;
                content: z.ZodString;
                resolved: z.ZodBoolean;
                createdAt: z.ZodString;
                updatedAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                resolved: boolean;
                id: number;
                createdAt: string;
                updatedAt: string | null;
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }, {
                resolved: boolean;
                id: number;
                createdAt: string;
                updatedAt: string | null;
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }>, "many">>>;
            author: z.ZodObject<{
                id: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
                name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                email: z.ZodString;
                avatar: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                }, {
                    url: string;
                }>, z.ZodObject<{
                    url: z.ZodString;
                    formats: z.ZodObject<{
                        thumbnail: z.ZodNullable<z.ZodObject<{
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            url: string;
                        }, {
                            url: string;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        thumbnail: {
                            url: string;
                        } | null;
                    }, {
                        thumbnail: {
                            url: string;
                        } | null;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                    formats: {
                        thumbnail: {
                            url: string;
                        } | null;
                    };
                }, {
                    url: string;
                    formats: {
                        thumbnail: {
                            url: string;
                        } | null;
                    };
                }>, z.ZodString]>>>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>;
            gotThread: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            threadFirstItemId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            section: z.ZodOptional<z.ZodString>;
        } & {
            related: z.ZodOptional<z.ZodIntersection<z.ZodObject<{
                id: z.ZodNumber;
                uid: z.ZodString;
                documentId: z.ZodString;
                createdAt: z.ZodString;
                updatedAt: z.ZodString;
                publishedAt: z.ZodNullable<z.ZodString>;
                locale: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                uid: string;
                id: number;
                documentId: string;
                createdAt: string;
                updatedAt: string;
                publishedAt: string | null;
                locale?: string | null | undefined;
            }, {
                uid: string;
                id: number;
                documentId: string;
                createdAt: string;
                updatedAt: string;
                publishedAt: string | null;
                locale?: string | null | undefined;
            }>, z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            documentId: z.ZodString;
            threadOf: z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
                id: z.ZodNumber;
                content: z.ZodString;
                blocked: z.ZodNullable<z.ZodBoolean>;
                blockedThread: z.ZodNullable<z.ZodBoolean>;
                blockReason: z.ZodNullable<z.ZodString>;
                isAdminComment: z.ZodNullable<z.ZodBoolean>;
                removed: z.ZodNullable<z.ZodBoolean>;
                approvalStatus: z.ZodNullable<z.ZodUnion<[z.ZodLiteral<"PENDING">, z.ZodLiteral<"APPROVED">, z.ZodLiteral<"REJECTED">, z.ZodLiteral<"BLOCKED">, z.ZodLiteral<"OPEN">, z.ZodLiteral<"REMOVED">, z.ZodLiteral<"TO_REVIEW">, z.ZodLiteral<"UNKNOWN">]>>;
                createdAt: z.ZodString;
                updatedAt: z.ZodString;
                reports: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    reason: z.ZodUnion<[z.ZodLiteral<"BAD_LANGUAGE">, z.ZodLiteral<"DISCRIMINATION">, z.ZodLiteral<"OTHER">]>;
                    content: z.ZodString;
                    resolved: z.ZodBoolean;
                    createdAt: z.ZodString;
                    updatedAt: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    resolved: boolean;
                    id: number;
                    createdAt: string;
                    updatedAt: string | null;
                    reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                    content: string;
                }, {
                    resolved: boolean;
                    id: number;
                    createdAt: string;
                    updatedAt: string | null;
                    reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                    content: string;
                }>, "many">>>;
                author: z.ZodObject<{
                    id: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
                    name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                    email: z.ZodString;
                    avatar: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
                        url: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                    }, {
                        url: string;
                    }>, z.ZodObject<{
                        url: z.ZodString;
                        formats: z.ZodObject<{
                            thumbnail: z.ZodNullable<z.ZodObject<{
                                url: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                url: string;
                            }, {
                                url: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            thumbnail: {
                                url: string;
                            } | null;
                        }, {
                            thumbnail: {
                                url: string;
                            } | null;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                        formats: {
                            thumbnail: {
                                url: string;
                            } | null;
                        };
                    }, {
                        url: string;
                        formats: {
                            thumbnail: {
                                url: string;
                            } | null;
                        };
                    }>, z.ZodString]>>>;
                }, "strip", z.ZodTypeAny, {
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
                }, {
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
                }>;
                gotThread: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                threadFirstItemId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                section: z.ZodOptional<z.ZodString>;
            } & {
                related: z.ZodString;
                threadOf: z.ZodOptional<z.ZodNullable<z.ZodType<Comment, z.ZodTypeDef, Comment>>>;
                documentId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
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
                    reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                    content: string;
                }[] | null | undefined;
                gotThread?: boolean | null | undefined;
                threadFirstItemId?: number | null | undefined;
                section?: string | undefined;
                threadOf?: Comment | null | undefined;
            }, {
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
                    reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                    content: string;
                }[] | null | undefined;
                gotThread?: boolean | null | undefined;
                threadFirstItemId?: number | null | undefined;
                section?: string | undefined;
                threadOf?: Comment | null | undefined;
            }>>>>;
        }, "related"> & {
            related: z.ZodString;
        }, "strip", z.ZodTypeAny, {
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
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }[] | null | undefined;
            gotThread?: boolean | null | undefined;
            threadFirstItemId?: number | null | undefined;
            section?: string | undefined;
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
                    reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                    content: string;
                }[] | null | undefined;
                gotThread?: boolean | null | undefined;
                threadFirstItemId?: number | null | undefined;
                section?: string | undefined;
                threadOf?: Comment | null | undefined;
            } | null | undefined;
        }, {
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
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }[] | null | undefined;
            gotThread?: boolean | null | undefined;
            threadFirstItemId?: number | null | undefined;
            section?: string | undefined;
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
                    reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                    content: string;
                }[] | null | undefined;
                gotThread?: boolean | null | undefined;
                threadFirstItemId?: number | null | undefined;
                section?: string | undefined;
                threadOf?: Comment | null | undefined;
            } | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
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
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }[] | null | undefined;
        gotThread?: boolean | null | undefined;
        threadFirstItemId?: number | null | undefined;
        section?: string | undefined;
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
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }[] | null | undefined;
            gotThread?: boolean | null | undefined;
            threadFirstItemId?: number | null | undefined;
            section?: string | undefined;
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
                    reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                    content: string;
                }[] | null | undefined;
                gotThread?: boolean | null | undefined;
                threadFirstItemId?: number | null | undefined;
                section?: string | undefined;
                threadOf?: Comment | null | undefined;
            } | null | undefined;
        } | null | undefined;
    }, {
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
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }[] | null | undefined;
        gotThread?: boolean | null | undefined;
        threadFirstItemId?: number | null | undefined;
        section?: string | undefined;
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
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }[] | null | undefined;
            gotThread?: boolean | null | undefined;
            threadFirstItemId?: number | null | undefined;
            section?: string | undefined;
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
                    reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                    content: string;
                }[] | null | undefined;
                gotThread?: boolean | null | undefined;
                threadFirstItemId?: number | null | undefined;
                section?: string | undefined;
                threadOf?: Comment | null | undefined;
            } | null | undefined;
        } | null | undefined;
    }>>;
    level: z.ZodArray<z.ZodObject<Omit<{
        id: z.ZodNumber;
        content: z.ZodString;
        blocked: z.ZodNullable<z.ZodBoolean>;
        blockedThread: z.ZodNullable<z.ZodBoolean>;
        blockReason: z.ZodNullable<z.ZodString>;
        isAdminComment: z.ZodNullable<z.ZodBoolean>;
        removed: z.ZodNullable<z.ZodBoolean>;
        approvalStatus: z.ZodNullable<z.ZodUnion<[z.ZodLiteral<"PENDING">, z.ZodLiteral<"APPROVED">, z.ZodLiteral<"REJECTED">, z.ZodLiteral<"BLOCKED">, z.ZodLiteral<"OPEN">, z.ZodLiteral<"REMOVED">, z.ZodLiteral<"TO_REVIEW">, z.ZodLiteral<"UNKNOWN">]>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        reports: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            reason: z.ZodUnion<[z.ZodLiteral<"BAD_LANGUAGE">, z.ZodLiteral<"DISCRIMINATION">, z.ZodLiteral<"OTHER">]>;
            content: z.ZodString;
            resolved: z.ZodBoolean;
            createdAt: z.ZodString;
            updatedAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            resolved: boolean;
            id: number;
            createdAt: string;
            updatedAt: string | null;
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }, {
            resolved: boolean;
            id: number;
            createdAt: string;
            updatedAt: string | null;
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }>, "many">>>;
        author: z.ZodObject<{
            id: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
            name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            email: z.ZodString;
            avatar: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
            }, {
                url: string;
            }>, z.ZodObject<{
                url: z.ZodString;
                formats: z.ZodObject<{
                    thumbnail: z.ZodNullable<z.ZodObject<{
                        url: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                    }, {
                        url: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    thumbnail: {
                        url: string;
                    } | null;
                }, {
                    thumbnail: {
                        url: string;
                    } | null;
                }>;
            }, "strip", z.ZodTypeAny, {
                url: string;
                formats: {
                    thumbnail: {
                        url: string;
                    } | null;
                };
            }, {
                url: string;
                formats: {
                    thumbnail: {
                        url: string;
                    } | null;
                };
            }>, z.ZodString]>>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>;
        gotThread: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        threadFirstItemId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        section: z.ZodOptional<z.ZodString>;
    } & {
        related: z.ZodOptional<z.ZodIntersection<z.ZodObject<{
            id: z.ZodNumber;
            uid: z.ZodString;
            documentId: z.ZodString;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            publishedAt: z.ZodNullable<z.ZodString>;
            locale: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            uid: string;
            id: number;
            documentId: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string | null;
            locale?: string | null | undefined;
        }, {
            uid: string;
            id: number;
            documentId: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string | null;
            locale?: string | null | undefined;
        }>, z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        documentId: z.ZodString;
        threadOf: z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
            id: z.ZodNumber;
            content: z.ZodString;
            blocked: z.ZodNullable<z.ZodBoolean>;
            blockedThread: z.ZodNullable<z.ZodBoolean>;
            blockReason: z.ZodNullable<z.ZodString>;
            isAdminComment: z.ZodNullable<z.ZodBoolean>;
            removed: z.ZodNullable<z.ZodBoolean>;
            approvalStatus: z.ZodNullable<z.ZodUnion<[z.ZodLiteral<"PENDING">, z.ZodLiteral<"APPROVED">, z.ZodLiteral<"REJECTED">, z.ZodLiteral<"BLOCKED">, z.ZodLiteral<"OPEN">, z.ZodLiteral<"REMOVED">, z.ZodLiteral<"TO_REVIEW">, z.ZodLiteral<"UNKNOWN">]>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            reports: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                reason: z.ZodUnion<[z.ZodLiteral<"BAD_LANGUAGE">, z.ZodLiteral<"DISCRIMINATION">, z.ZodLiteral<"OTHER">]>;
                content: z.ZodString;
                resolved: z.ZodBoolean;
                createdAt: z.ZodString;
                updatedAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                resolved: boolean;
                id: number;
                createdAt: string;
                updatedAt: string | null;
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }, {
                resolved: boolean;
                id: number;
                createdAt: string;
                updatedAt: string | null;
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }>, "many">>>;
            author: z.ZodObject<{
                id: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
                name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                email: z.ZodString;
                avatar: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                }, {
                    url: string;
                }>, z.ZodObject<{
                    url: z.ZodString;
                    formats: z.ZodObject<{
                        thumbnail: z.ZodNullable<z.ZodObject<{
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            url: string;
                        }, {
                            url: string;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        thumbnail: {
                            url: string;
                        } | null;
                    }, {
                        thumbnail: {
                            url: string;
                        } | null;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                    formats: {
                        thumbnail: {
                            url: string;
                        } | null;
                    };
                }, {
                    url: string;
                    formats: {
                        thumbnail: {
                            url: string;
                        } | null;
                    };
                }>, z.ZodString]>>>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>;
            gotThread: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            threadFirstItemId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            section: z.ZodOptional<z.ZodString>;
        } & {
            related: z.ZodString;
            threadOf: z.ZodOptional<z.ZodNullable<z.ZodType<Comment, z.ZodTypeDef, Comment>>>;
            documentId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
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
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }[] | null | undefined;
            gotThread?: boolean | null | undefined;
            threadFirstItemId?: number | null | undefined;
            section?: string | undefined;
            threadOf?: Comment | null | undefined;
        }, {
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
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }[] | null | undefined;
            gotThread?: boolean | null | undefined;
            threadFirstItemId?: number | null | undefined;
            section?: string | undefined;
            threadOf?: Comment | null | undefined;
        }>>>>;
    }, "related" | "threadOf">, "strip", z.ZodTypeAny, {
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
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }[] | null | undefined;
        gotThread?: boolean | null | undefined;
        threadFirstItemId?: number | null | undefined;
        section?: string | undefined;
    }, {
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
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }[] | null | undefined;
        gotThread?: boolean | null | undefined;
        threadFirstItemId?: number | null | undefined;
        section?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
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
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }[] | null | undefined;
        gotThread?: boolean | null | undefined;
        threadFirstItemId?: number | null | undefined;
        section?: string | undefined;
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
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }[] | null | undefined;
            gotThread?: boolean | null | undefined;
            threadFirstItemId?: number | null | undefined;
            section?: string | undefined;
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
                    reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                    content: string;
                }[] | null | undefined;
                gotThread?: boolean | null | undefined;
                threadFirstItemId?: number | null | undefined;
                section?: string | undefined;
                threadOf?: Comment | null | undefined;
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
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }[] | null | undefined;
        gotThread?: boolean | null | undefined;
        threadFirstItemId?: number | null | undefined;
        section?: string | undefined;
    }[];
}, {
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
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }[] | null | undefined;
        gotThread?: boolean | null | undefined;
        threadFirstItemId?: number | null | undefined;
        section?: string | undefined;
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
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }[] | null | undefined;
            gotThread?: boolean | null | undefined;
            threadFirstItemId?: number | null | undefined;
            section?: string | undefined;
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
                    reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                    content: string;
                }[] | null | undefined;
                gotThread?: boolean | null | undefined;
                threadFirstItemId?: number | null | undefined;
                section?: string | undefined;
                threadOf?: Comment | null | undefined;
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
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }[] | null | undefined;
        gotThread?: boolean | null | undefined;
        threadFirstItemId?: number | null | undefined;
        section?: string | undefined;
    }[];
}>;
export type CommentDetails = z.infer<typeof commentDetailsSchema>;
export declare const contentTypeSchema: z.ZodObject<{
    data: z.ZodObject<{
        apiID: z.ZodString;
        uid: z.ZodString;
        schema: z.ZodObject<{
            attributes: z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodUnion<[z.ZodLiteral<"string">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                type: string;
            }, {
                type: string;
            }>>;
            collectionName: z.ZodString;
            description: z.ZodString;
            displayName: z.ZodString;
            draftAndPublish: z.ZodBoolean;
            kind: z.ZodString;
            pluralName: z.ZodString;
            singularName: z.ZodString;
            visible: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            displayName: string;
            attributes: Record<string, {
                type: string;
            }>;
            collectionName: string;
            description: string;
            draftAndPublish: boolean;
            kind: string;
            pluralName: string;
            singularName: string;
            visible: boolean;
        }, {
            displayName: string;
            attributes: Record<string, {
                type: string;
            }>;
            collectionName: string;
            description: string;
            draftAndPublish: boolean;
            kind: string;
            pluralName: string;
            singularName: string;
            visible: boolean;
        }>;
    }, "strip", z.ZodTypeAny, {
        uid: string;
        apiID: string;
        schema: {
            displayName: string;
            attributes: Record<string, {
                type: string;
            }>;
            collectionName: string;
            description: string;
            draftAndPublish: boolean;
            kind: string;
            pluralName: string;
            singularName: string;
            visible: boolean;
        };
    }, {
        uid: string;
        apiID: string;
        schema: {
            displayName: string;
            attributes: Record<string, {
                type: string;
            }>;
            collectionName: string;
            description: string;
            draftAndPublish: boolean;
            kind: string;
            pluralName: string;
            singularName: string;
            visible: boolean;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        uid: string;
        apiID: string;
        schema: {
            displayName: string;
            attributes: Record<string, {
                type: string;
            }>;
            collectionName: string;
            description: string;
            draftAndPublish: boolean;
            kind: string;
            pluralName: string;
            singularName: string;
            visible: boolean;
        };
    };
}, {
    data: {
        uid: string;
        apiID: string;
        schema: {
            displayName: string;
            attributes: Record<string, {
                type: string;
            }>;
            collectionName: string;
            description: string;
            draftAndPublish: boolean;
            kind: string;
            pluralName: string;
            singularName: string;
            visible: boolean;
        };
    };
}>;
export declare const contentTypesSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        apiID: z.ZodString;
        uid: z.ZodString;
        schema: z.ZodObject<{
            attributes: z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodUnion<[z.ZodLiteral<"string">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                type: string;
            }, {
                type: string;
            }>>;
            collectionName: z.ZodString;
            description: z.ZodString;
            displayName: z.ZodString;
            draftAndPublish: z.ZodBoolean;
            kind: z.ZodString;
            pluralName: z.ZodString;
            singularName: z.ZodString;
            visible: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            displayName: string;
            attributes: Record<string, {
                type: string;
            }>;
            collectionName: string;
            description: string;
            draftAndPublish: boolean;
            kind: string;
            pluralName: string;
            singularName: string;
            visible: boolean;
        }, {
            displayName: string;
            attributes: Record<string, {
                type: string;
            }>;
            collectionName: string;
            description: string;
            draftAndPublish: boolean;
            kind: string;
            pluralName: string;
            singularName: string;
            visible: boolean;
        }>;
    }, "strip", z.ZodTypeAny, {
        uid: string;
        apiID: string;
        schema: {
            displayName: string;
            attributes: Record<string, {
                type: string;
            }>;
            collectionName: string;
            description: string;
            draftAndPublish: boolean;
            kind: string;
            pluralName: string;
            singularName: string;
            visible: boolean;
        };
    }, {
        uid: string;
        apiID: string;
        schema: {
            displayName: string;
            attributes: Record<string, {
                type: string;
            }>;
            collectionName: string;
            description: string;
            draftAndPublish: boolean;
            kind: string;
            pluralName: string;
            singularName: string;
            visible: boolean;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    data: {
        uid: string;
        apiID: string;
        schema: {
            displayName: string;
            attributes: Record<string, {
                type: string;
            }>;
            collectionName: string;
            description: string;
            draftAndPublish: boolean;
            kind: string;
            pluralName: string;
            singularName: string;
            visible: boolean;
        };
    }[];
}, {
    data: {
        uid: string;
        apiID: string;
        schema: {
            displayName: string;
            attributes: Record<string, {
                type: string;
            }>;
            collectionName: string;
            description: string;
            draftAndPublish: boolean;
            kind: string;
            pluralName: string;
            singularName: string;
            visible: boolean;
        };
    }[];
}>;
export type ContentType = z.infer<typeof contentTypeSchema>;
export declare const reportSchema: z.ZodObject<{
    author: z.ZodUnknown;
    content: z.ZodString;
    id: z.ZodNumber;
    approvalStatus: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<"PENDING">, z.ZodLiteral<"APPROVED">, z.ZodLiteral<"REJECTED">, z.ZodLiteral<"BLOCKED">, z.ZodLiteral<"OPEN">, z.ZodLiteral<"REMOVED">, z.ZodLiteral<"TO_REVIEW">, z.ZodLiteral<"UNKNOWN">]>>>;
    reason: z.ZodUnion<[z.ZodLiteral<"BAD_LANGUAGE">, z.ZodLiteral<"DISCRIMINATION">, z.ZodLiteral<"OTHER">]>;
    reports: z.ZodArray<z.ZodUnknown, "many">;
    resolved: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    related: z.ZodObject<{
        id: z.ZodNumber;
        content: z.ZodString;
        blocked: z.ZodNullable<z.ZodBoolean>;
        blockedThread: z.ZodNullable<z.ZodBoolean>;
        blockReason: z.ZodNullable<z.ZodString>;
        isAdminComment: z.ZodNullable<z.ZodBoolean>;
        removed: z.ZodNullable<z.ZodBoolean>;
        approvalStatus: z.ZodNullable<z.ZodUnion<[z.ZodLiteral<"PENDING">, z.ZodLiteral<"APPROVED">, z.ZodLiteral<"REJECTED">, z.ZodLiteral<"BLOCKED">, z.ZodLiteral<"OPEN">, z.ZodLiteral<"REMOVED">, z.ZodLiteral<"TO_REVIEW">, z.ZodLiteral<"UNKNOWN">]>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        reports: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            reason: z.ZodUnion<[z.ZodLiteral<"BAD_LANGUAGE">, z.ZodLiteral<"DISCRIMINATION">, z.ZodLiteral<"OTHER">]>;
            content: z.ZodString;
            resolved: z.ZodBoolean;
            createdAt: z.ZodString;
            updatedAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            resolved: boolean;
            id: number;
            createdAt: string;
            updatedAt: string | null;
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }, {
            resolved: boolean;
            id: number;
            createdAt: string;
            updatedAt: string | null;
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }>, "many">>>;
        author: z.ZodObject<{
            id: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
            name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            email: z.ZodString;
            avatar: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
            }, {
                url: string;
            }>, z.ZodObject<{
                url: z.ZodString;
                formats: z.ZodObject<{
                    thumbnail: z.ZodNullable<z.ZodObject<{
                        url: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                    }, {
                        url: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    thumbnail: {
                        url: string;
                    } | null;
                }, {
                    thumbnail: {
                        url: string;
                    } | null;
                }>;
            }, "strip", z.ZodTypeAny, {
                url: string;
                formats: {
                    thumbnail: {
                        url: string;
                    } | null;
                };
            }, {
                url: string;
                formats: {
                    thumbnail: {
                        url: string;
                    } | null;
                };
            }>, z.ZodString]>>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>;
        gotThread: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        threadFirstItemId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        section: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }[] | null | undefined;
        gotThread?: boolean | null | undefined;
        threadFirstItemId?: number | null | undefined;
        section?: string | undefined;
    }, {
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
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }[] | null | undefined;
        gotThread?: boolean | null | undefined;
        threadFirstItemId?: number | null | undefined;
        section?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: string;
    updatedAt: string | null;
    reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
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
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }[] | null | undefined;
        gotThread?: boolean | null | undefined;
        threadFirstItemId?: number | null | undefined;
        section?: string | undefined;
    };
    resolved?: boolean | undefined;
    approvalStatus?: "PENDING" | "APPROVED" | "REJECTED" | "BLOCKED" | "OPEN" | "REMOVED" | "TO_REVIEW" | "UNKNOWN" | null | undefined;
    author?: unknown;
}, {
    id: number;
    createdAt: string;
    updatedAt: string | null;
    reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
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
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }[] | null | undefined;
        gotThread?: boolean | null | undefined;
        threadFirstItemId?: number | null | undefined;
        section?: string | undefined;
    };
    resolved?: boolean | undefined;
    approvalStatus?: "PENDING" | "APPROVED" | "REJECTED" | "BLOCKED" | "OPEN" | "REMOVED" | "TO_REVIEW" | "UNKNOWN" | null | undefined;
    author?: unknown;
}>;
export type Report = z.infer<typeof reportSchema>;
export declare const reportsSchema: z.ZodObject<{
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        pageSize: z.ZodNumber;
        pageCount: z.ZodNumber;
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }, {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }>;
    result: z.ZodArray<z.ZodObject<{
        author: z.ZodUnknown;
        content: z.ZodString;
        id: z.ZodNumber;
        approvalStatus: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<"PENDING">, z.ZodLiteral<"APPROVED">, z.ZodLiteral<"REJECTED">, z.ZodLiteral<"BLOCKED">, z.ZodLiteral<"OPEN">, z.ZodLiteral<"REMOVED">, z.ZodLiteral<"TO_REVIEW">, z.ZodLiteral<"UNKNOWN">]>>>;
        reason: z.ZodUnion<[z.ZodLiteral<"BAD_LANGUAGE">, z.ZodLiteral<"DISCRIMINATION">, z.ZodLiteral<"OTHER">]>;
        reports: z.ZodArray<z.ZodUnknown, "many">;
        resolved: z.ZodOptional<z.ZodBoolean>;
        updatedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        related: z.ZodObject<{
            id: z.ZodNumber;
            content: z.ZodString;
            blocked: z.ZodNullable<z.ZodBoolean>;
            blockedThread: z.ZodNullable<z.ZodBoolean>;
            blockReason: z.ZodNullable<z.ZodString>;
            isAdminComment: z.ZodNullable<z.ZodBoolean>;
            removed: z.ZodNullable<z.ZodBoolean>;
            approvalStatus: z.ZodNullable<z.ZodUnion<[z.ZodLiteral<"PENDING">, z.ZodLiteral<"APPROVED">, z.ZodLiteral<"REJECTED">, z.ZodLiteral<"BLOCKED">, z.ZodLiteral<"OPEN">, z.ZodLiteral<"REMOVED">, z.ZodLiteral<"TO_REVIEW">, z.ZodLiteral<"UNKNOWN">]>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            reports: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                reason: z.ZodUnion<[z.ZodLiteral<"BAD_LANGUAGE">, z.ZodLiteral<"DISCRIMINATION">, z.ZodLiteral<"OTHER">]>;
                content: z.ZodString;
                resolved: z.ZodBoolean;
                createdAt: z.ZodString;
                updatedAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                resolved: boolean;
                id: number;
                createdAt: string;
                updatedAt: string | null;
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }, {
                resolved: boolean;
                id: number;
                createdAt: string;
                updatedAt: string | null;
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }>, "many">>>;
            author: z.ZodObject<{
                id: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
                name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                email: z.ZodString;
                avatar: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                }, {
                    url: string;
                }>, z.ZodObject<{
                    url: z.ZodString;
                    formats: z.ZodObject<{
                        thumbnail: z.ZodNullable<z.ZodObject<{
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            url: string;
                        }, {
                            url: string;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        thumbnail: {
                            url: string;
                        } | null;
                    }, {
                        thumbnail: {
                            url: string;
                        } | null;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                    formats: {
                        thumbnail: {
                            url: string;
                        } | null;
                    };
                }, {
                    url: string;
                    formats: {
                        thumbnail: {
                            url: string;
                        } | null;
                    };
                }>, z.ZodString]>>>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>;
            gotThread: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            threadFirstItemId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            section: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
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
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }[] | null | undefined;
            gotThread?: boolean | null | undefined;
            threadFirstItemId?: number | null | undefined;
            section?: string | undefined;
        }, {
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
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }[] | null | undefined;
            gotThread?: boolean | null | undefined;
            threadFirstItemId?: number | null | undefined;
            section?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        createdAt: string;
        updatedAt: string | null;
        reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
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
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }[] | null | undefined;
            gotThread?: boolean | null | undefined;
            threadFirstItemId?: number | null | undefined;
            section?: string | undefined;
        };
        resolved?: boolean | undefined;
        approvalStatus?: "PENDING" | "APPROVED" | "REJECTED" | "BLOCKED" | "OPEN" | "REMOVED" | "TO_REVIEW" | "UNKNOWN" | null | undefined;
        author?: unknown;
    }, {
        id: number;
        createdAt: string;
        updatedAt: string | null;
        reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
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
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }[] | null | undefined;
            gotThread?: boolean | null | undefined;
            threadFirstItemId?: number | null | undefined;
            section?: string | undefined;
        };
        resolved?: boolean | undefined;
        approvalStatus?: "PENDING" | "APPROVED" | "REJECTED" | "BLOCKED" | "OPEN" | "REMOVED" | "TO_REVIEW" | "UNKNOWN" | null | undefined;
        author?: unknown;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
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
        reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
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
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }[] | null | undefined;
            gotThread?: boolean | null | undefined;
            threadFirstItemId?: number | null | undefined;
            section?: string | undefined;
        };
        resolved?: boolean | undefined;
        approvalStatus?: "PENDING" | "APPROVED" | "REJECTED" | "BLOCKED" | "OPEN" | "REMOVED" | "TO_REVIEW" | "UNKNOWN" | null | undefined;
        author?: unknown;
    }[];
}, {
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
        reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
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
                reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
                content: string;
            }[] | null | undefined;
            gotThread?: boolean | null | undefined;
            threadFirstItemId?: number | null | undefined;
            section?: string | undefined;
        };
        resolved?: boolean | undefined;
        approvalStatus?: "PENDING" | "APPROVED" | "REJECTED" | "BLOCKED" | "OPEN" | "REMOVED" | "TO_REVIEW" | "UNKNOWN" | null | undefined;
        author?: unknown;
    }[];
}>;
export declare const rolesListSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        documentId: z.ZodString;
        name: z.ZodString;
        code: z.ZodString;
        description: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        publishedAt: z.ZodString;
        locale: z.ZodNullable<z.ZodString>;
        usersCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    data: {
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
    }[];
}, {
    data: {
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
    }[];
}>;
export declare const userSchema: z.ZodObject<{
    data: z.ZodObject<{
        id: z.ZodNumber;
        documentId: z.ZodString;
        firstname: z.ZodString;
        lastname: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
        email: z.ZodString;
        isActive: z.ZodBoolean;
        blocked: z.ZodBoolean;
        preferedLanguage: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        publishedAt: z.ZodString;
        locale: z.ZodNull;
        roles: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
            description: z.ZodString;
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            id: number;
            name: string;
            description: string;
        }, {
            code: string;
            id: number;
            name: string;
            description: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
}, "strip", z.ZodTypeAny, {
    data: {
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
}, {
    data: {
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
}>;
export type User = z.infer<typeof userSchema>['data'];
export {};
