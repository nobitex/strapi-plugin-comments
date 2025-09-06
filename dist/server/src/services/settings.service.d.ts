import { StrapiContext } from '../@types';
import { CommentsPluginConfig } from '../config';
declare const _default: ({ strapi }: StrapiContext) => {
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
        emailEnabled?: boolean;
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
        emailEnabled?: boolean;
        gql?: {
            auth?: boolean;
        };
        client?: {
            url?: string;
            contactEmail?: string;
        };
    }, "enabledCollections" | "moderatorRoles" | "isGQLPluginEnabled">>;
    update: (config: CommentsPluginConfig) => Promise<{
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
        emailEnabled?: boolean;
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
        emailEnabled?: boolean;
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
        emailEnabled?: boolean;
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
        emailEnabled?: boolean;
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
export default _default;
