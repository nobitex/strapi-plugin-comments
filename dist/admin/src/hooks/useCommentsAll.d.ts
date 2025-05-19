export declare const useCommentsAll: (queryParams: Record<string, string>) => import("@tanstack/react-query").DefinedUseQueryResult<{
    result: {
        reports: {
            resolved: boolean;
            id: number;
            createdAt: string;
            updatedAt: string | null;
            reason: "BAD_LANGUAGE" | "DISCRIMINATION" | "OTHER";
            content: string;
        }[];
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
        gotThread?: boolean | null | undefined;
        threadFirstItemId?: number | null | undefined;
        threadOf?: import("../api/schemas").Comment | null | undefined;
        related?: string | ({
            uid: string;
            id: number;
            documentId: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string | null;
            locale?: string | null | undefined;
        } & Record<string, unknown>) | undefined;
        documentId?: string | undefined;
    }[];
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
}, Error>;
