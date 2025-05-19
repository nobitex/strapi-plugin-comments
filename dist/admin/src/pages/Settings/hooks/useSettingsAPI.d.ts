type MutationKey = {
    restoreSettingsMutation: boolean;
    updateSettingsMutation: boolean;
    restartStrapiMutation: boolean;
};
type CallbacksMutation = {
    [L in keyof MutationKey as `${L & string}${'Success' | 'Error'}`]?: () => void;
};
export declare const useSettingsAPI: (callbacksMutation?: CallbacksMutation) => {
    config: import("@tanstack/react-query").UseQueryResult<{
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
    }, Error>;
    collectionTypes: import("@tanstack/react-query").UseQueryResult<{
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
    }[], Error>;
    roles: import("@tanstack/react-query").UseQueryResult<{
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
    }[], Error>;
    restoreSettingsMutation: import("@tanstack/react-query").UseMutationResult<import("@strapi/admin/strapi-admin").FetchResponse<any>, Error, void, unknown>;
    updateSettingsMutation: import("@tanstack/react-query").UseMutationResult<import("@strapi/admin/strapi-admin").FetchResponse<any>, Error, any, unknown>;
    restartStrapiMutation: import("@tanstack/react-query").UseMutationResult<import("@strapi/admin/strapi-admin").FetchResponse<any>, Error, void, unknown>;
};
export {};
