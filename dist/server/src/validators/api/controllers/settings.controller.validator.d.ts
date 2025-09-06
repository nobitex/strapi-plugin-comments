export declare const validateConfig: (config: unknown) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    enabledCollections?: string[];
    approvalFlow?: string[];
    entryLabel?: Record<string, string[]>;
    moderatorRoles?: string[];
    badWords?: boolean;
    blockedAuthorProps?: string[];
    isValidationEnabled?: boolean;
    reportReasons?: {
        BAD_LANGUAGE?: import("../../../const").REPORT_REASON.BAD_LANGUAGE;
        DISCRIMINATION?: import("../../../const").REPORT_REASON.DISCRIMINATION;
        OTHER?: import("../../../const").REPORT_REASON.OTHER;
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
}>;
