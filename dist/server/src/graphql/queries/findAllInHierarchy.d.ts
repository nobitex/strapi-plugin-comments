import { CoreStrapi } from '../../@types';
import { Nexus } from '../../@types/graphql';
declare const _default: (strapi: CoreStrapi, nexus: Nexus) => {
    type: import("nexus/dist/core").NexusNonNullDef<any>;
    args: {
        relation: import("nexus/dist/core").NexusNonNullDef<any>;
        sort: any;
        filters: any;
    };
    resolve(_obj: any, args: any): Promise<any[]>;
};
export default _default;
