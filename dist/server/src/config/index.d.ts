import { z } from 'zod';
import { REPORT_REASON } from '../const';
export declare const schemaConfig: z.ZodObject<{
    isValidationEnabled: z.ZodOptional<z.ZodBoolean>;
    reportReasons: z.ZodOptional<z.ZodObject<{
        BAD_LANGUAGE: z.ZodLiteral<REPORT_REASON.BAD_LANGUAGE>;
        OTHER: z.ZodLiteral<REPORT_REASON.OTHER>;
        DISCRIMINATION: z.ZodLiteral<REPORT_REASON.DISCRIMINATION>;
    }, "strip", z.ZodTypeAny, {
        BAD_LANGUAGE?: REPORT_REASON.BAD_LANGUAGE;
        DISCRIMINATION?: REPORT_REASON.DISCRIMINATION;
        OTHER?: REPORT_REASON.OTHER;
    }, {
        BAD_LANGUAGE?: REPORT_REASON.BAD_LANGUAGE;
        DISCRIMINATION?: REPORT_REASON.DISCRIMINATION;
        OTHER?: REPORT_REASON.OTHER;
    }>>;
    isGQLPluginEnabled: z.ZodOptional<z.ZodBoolean>;
    enabledCollections: z.ZodArray<z.ZodString, "many">;
    moderatorRoles: z.ZodArray<z.ZodString, "many">;
    approvalFlow: z.ZodArray<z.ZodString, "many">;
    entryLabel: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>;
    badWords: z.ZodOptional<z.ZodBoolean>;
    blockedAuthorProps: z.ZodArray<z.ZodString, "many">;
    gql: z.ZodOptional<z.ZodObject<{
        auth: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        auth?: boolean;
    }, {
        auth?: boolean;
    }>>;
    client: z.ZodDefault<z.ZodObject<{
        url: z.ZodNullable<z.ZodString>;
        contactEmail: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url?: string;
        contactEmail?: string;
    }, {
        url?: string;
        contactEmail?: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    enabledCollections?: string[];
    approvalFlow?: string[];
    entryLabel?: Record<string, string[]>;
    moderatorRoles?: string[];
    badWords?: boolean;
    blockedAuthorProps?: string[];
    isValidationEnabled?: boolean;
    reportReasons?: {
        BAD_LANGUAGE?: REPORT_REASON.BAD_LANGUAGE;
        DISCRIMINATION?: REPORT_REASON.DISCRIMINATION;
        OTHER?: REPORT_REASON.OTHER;
    };
    isGQLPluginEnabled?: boolean;
    gql?: {
        auth?: boolean;
    };
    client?: {
        url?: string;
        contactEmail?: string;
    };
}, {
    enabledCollections?: string[];
    approvalFlow?: string[];
    entryLabel?: Record<string, string[]>;
    moderatorRoles?: string[];
    badWords?: boolean;
    blockedAuthorProps?: string[];
    isValidationEnabled?: boolean;
    reportReasons?: {
        BAD_LANGUAGE?: REPORT_REASON.BAD_LANGUAGE;
        DISCRIMINATION?: REPORT_REASON.DISCRIMINATION;
        OTHER?: REPORT_REASON.OTHER;
    };
    isGQLPluginEnabled?: boolean;
    gql?: {
        auth?: boolean;
    };
    client?: {
        url?: string;
        contactEmail?: string;
    };
}>;
export type CommentsPluginConfig = z.infer<typeof schemaConfig>;
declare const config: {
    readonly default: {
        enabledCollections?: string[];
        approvalFlow?: string[];
        entryLabel?: Record<string, string[]>;
        moderatorRoles?: string[];
        badWords?: boolean;
        blockedAuthorProps?: string[];
        isValidationEnabled?: boolean;
        reportReasons?: {
            BAD_LANGUAGE?: REPORT_REASON.BAD_LANGUAGE;
            DISCRIMINATION?: REPORT_REASON.DISCRIMINATION;
            OTHER?: REPORT_REASON.OTHER;
        };
        isGQLPluginEnabled?: boolean;
        gql?: {
            auth?: boolean;
        };
        client?: {
            url?: string;
            contactEmail?: string;
        };
    };
    readonly validate: (config: unknown) => z.SafeParseReturnType<{
        enabledCollections?: string[];
        approvalFlow?: string[];
        entryLabel?: Record<string, string[]>;
        moderatorRoles?: string[];
        badWords?: boolean;
        blockedAuthorProps?: string[];
        isValidationEnabled?: boolean;
        reportReasons?: {
            BAD_LANGUAGE?: REPORT_REASON.BAD_LANGUAGE;
            DISCRIMINATION?: REPORT_REASON.DISCRIMINATION;
            OTHER?: REPORT_REASON.OTHER;
        };
        isGQLPluginEnabled?: boolean;
        gql?: {
            auth?: boolean;
        };
        client?: {
            url?: string;
            contactEmail?: string;
        };
    }, {
        enabledCollections?: string[];
        approvalFlow?: string[];
        entryLabel?: Record<string, string[]>;
        moderatorRoles?: string[];
        badWords?: boolean;
        blockedAuthorProps?: string[];
        isValidationEnabled?: boolean;
        reportReasons?: {
            BAD_LANGUAGE?: REPORT_REASON.BAD_LANGUAGE;
            DISCRIMINATION?: REPORT_REASON.DISCRIMINATION;
            OTHER?: REPORT_REASON.OTHER;
        };
        isGQLPluginEnabled?: boolean;
        gql?: {
            auth?: boolean;
        };
        client?: {
            url?: string;
            contactEmail?: string;
        };
    }>;
};
export default config;
