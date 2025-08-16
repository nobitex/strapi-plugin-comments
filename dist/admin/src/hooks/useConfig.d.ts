import { Config } from '../api/schemas';
export declare const useConfig: (setSettings: (settings: Config) => void) => import("@tanstack/react-query").UseQueryResult<{
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
}, Error>;
