import { RequestContext, StrapiContext } from '../@types';
import { CommentsPluginConfig } from '../config';
declare const settingsController: ({ strapi }: StrapiContext) => {
    get(ctx: RequestContext): Promise<{
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
    getForSettingsPage(ctx: RequestContext): Promise<{
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
    update(ctx: RequestContext<CommentsPluginConfig>): Promise<{
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
    restore(ctx: RequestContext): Promise<{
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
    restart(ctx: RequestContext): Promise<any>;
};
export type SettingsController = ReturnType<typeof settingsController>;
export default settingsController;
