import { FC, PropsWithChildren } from 'react';
export declare const UserContext: import("react").Context<{
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
} | null>;
export declare const UserProvider: FC<PropsWithChildren>;
