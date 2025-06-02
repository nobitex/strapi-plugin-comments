export declare const useReports: (queryParams?: Record<string, string>) => import("@tanstack/react-query").DefinedUseQueryResult<{
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
            entry?: string | undefined;
        };
        resolved?: boolean | undefined;
        approvalStatus?: "PENDING" | "APPROVED" | "REJECTED" | "BLOCKED" | "OPEN" | "REMOVED" | "TO_REVIEW" | "UNKNOWN" | null | undefined;
        author?: unknown;
    }[];
}, Error>;
