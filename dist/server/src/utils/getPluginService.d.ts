import { CoreStrapi } from '../@types';
import { PluginServices } from '../services';
export declare const getPluginService: <T extends "gql" | "client" | "admin" | "common" | "settings">(strapi: CoreStrapi, serviceName: T) => PluginServices[T];
