import { StrapiContext, PathValue } from '../@types';
import { CommentsPluginConfig } from '../config';
export declare const getConfig: <T extends "enabledCollections" | "approvalFlow" | "entryLabel" | "moderatorRoles" | "badWords" | "blockedAuthorProps" | "isValidationEnabled" | "reportReasons" | "isGQLPluginEnabled" | "emailEnabled" | "gql" | "client">(strapi: StrapiContext['strapi'], path: T, defaultValue: PathValue<CommentsPluginConfig, T>) => Promise<CommentsPluginConfig[T]>;
