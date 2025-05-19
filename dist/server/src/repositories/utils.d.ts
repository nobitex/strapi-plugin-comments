import { CoreStrapi } from '../@types';
import { ContentTypesUUIDs, KeysContentTypes } from '../content-types';
export declare const getModelUid: (strapi: CoreStrapi, name: KeysContentTypes) => ContentTypesUUIDs;
export declare const getDefaultAuthorPopulate: (strapi: CoreStrapi) => true | {
    populate: {
        avatar: boolean;
    };
};
export declare function getOrderBy(orderBy?: string | null): string[];
