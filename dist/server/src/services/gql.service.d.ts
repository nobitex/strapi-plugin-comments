import { Schema, UID } from '@strapi/strapi';
import { StrapiContext, ToBeFixed } from '../@types';
declare const gqlService: ({ strapi }: StrapiContext) => {
    graphQLFiltersToStrapiQuery: (queryFilters: ToBeFixed, contentType?: ToBeFixed) => any;
    buildContentTypeFilters<T extends UID.ContentType>(contentType: Schema.ContentType<T>): import("nexus/dist/core").NexusInputObjectTypeDef<any>;
};
export default gqlService;
