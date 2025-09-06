import { CoreStrapi, PathValue } from '../@types';
import { CommentsPluginConfig } from '../config';
import { REPORT_REASON } from '../const';
import { Either } from '../utils/Either';
export declare const getStoreRepositorySource: (strapi: CoreStrapi) => {
    getLocalConfig<P extends string>(prop?: P, defaultValue?: PathValue<CommentsPluginConfig, P>): PathValue<{
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
        emailEnabled?: boolean;
        gql?: {
            auth?: boolean;
        };
        client?: {
            url?: string;
            contactEmail?: string;
        };
    }, P>;
    getStore(): Promise<{
        get(params?: Partial<{
            key: string;
            type?: string;
            environment?: string;
            name?: string;
            tag?: string;
        }>): Promise<unknown>;
        set(params?: Partial<{
            key: string;
            value: unknown;
            type?: string;
            environment?: string;
            name?: string;
            tag?: string;
        }>): Promise<void>;
        delete(params?: Partial<{
            key: string;
            type?: string;
            environment?: string;
            name?: string;
            tag?: string;
        }>): Promise<void>;
    }>;
    getConfig(): Promise<Required<CommentsPluginConfig>>;
    get<T extends boolean>(viaSettingsPage?: T): Promise<Either<unknown, T extends true ? CommentsPluginConfig : Omit<CommentsPluginConfig, 'enabledCollections' | 'moderatorRoles' | 'isGQLPluginEnabled'>>>;
    update(config: CommentsPluginConfig): Promise<Either<unknown, {
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
            BAD_LANGUAGE?: REPORT_REASON.BAD_LANGUAGE;
            DISCRIMINATION?: REPORT_REASON.DISCRIMINATION;
            OTHER?: REPORT_REASON.OTHER;
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
    }, "enabledCollections" | "moderatorRoles" | "isGQLPluginEnabled">>>;
    restore(): Promise<Either<unknown, {
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
            BAD_LANGUAGE?: REPORT_REASON.BAD_LANGUAGE;
            DISCRIMINATION?: REPORT_REASON.DISCRIMINATION;
            OTHER?: REPORT_REASON.OTHER;
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
    }, "enabledCollections" | "moderatorRoles" | "isGQLPluginEnabled">>>;
};
export declare const getStoreRepository: (strapi: CoreStrapi) => {
    getLocalConfig<P extends string>(prop?: P, defaultValue?: PathValue<CommentsPluginConfig, P>): PathValue<{
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
        emailEnabled?: boolean;
        gql?: {
            auth?: boolean;
        };
        client?: {
            url?: string;
            contactEmail?: string;
        };
    }, P>;
    getStore(): Promise<{
        get(params?: Partial<{
            key: string;
            type?: string;
            environment?: string;
            name?: string;
            tag?: string;
        }>): Promise<unknown>;
        set(params?: Partial<{
            key: string;
            value: unknown;
            type?: string;
            environment?: string;
            name?: string;
            tag?: string;
        }>): Promise<void>;
        delete(params?: Partial<{
            key: string;
            type?: string;
            environment?: string;
            name?: string;
            tag?: string;
        }>): Promise<void>;
    }>;
    getConfig(): Promise<Required<CommentsPluginConfig>>;
    get<T extends boolean>(viaSettingsPage?: T): Promise<Either<unknown, T extends true ? CommentsPluginConfig : Omit<CommentsPluginConfig, 'enabledCollections' | 'moderatorRoles' | 'isGQLPluginEnabled'>>>;
    update(config: CommentsPluginConfig): Promise<Either<unknown, {
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
            BAD_LANGUAGE?: REPORT_REASON.BAD_LANGUAGE;
            DISCRIMINATION?: REPORT_REASON.DISCRIMINATION;
            OTHER?: REPORT_REASON.OTHER;
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
    }, "enabledCollections" | "moderatorRoles" | "isGQLPluginEnabled">>>;
    restore(): Promise<Either<unknown, {
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
            BAD_LANGUAGE?: REPORT_REASON.BAD_LANGUAGE;
            DISCRIMINATION?: REPORT_REASON.DISCRIMINATION;
            OTHER?: REPORT_REASON.OTHER;
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
    }, "enabledCollections" | "moderatorRoles" | "isGQLPluginEnabled">>>;
};
export type StoreRepository = ReturnType<typeof getStoreRepository>;
