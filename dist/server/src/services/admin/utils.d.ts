import { CoreStrapi, DBQuery, Where } from '../../@types';
import { admin as adminValidator } from '../../validators/api';
export declare const getAdminServiceUtils: (strapi: CoreStrapi) => {
    findAll: {
        createParams(orderBy: adminValidator.CommentFindAllSchema['orderBy'], page: adminValidator.CommentFindAllSchema['page'], pageSize: adminValidator.CommentFindAllSchema['pageSize'], _q: adminValidator.CommentFindAllSchema['_q'], filters: adminValidator.CommentFindAllSchema['filters']): Partial<DBQuery>;
        getPopulate(): {
            authorUser: boolean | {
                populate: {
                    avatar: boolean;
                };
            };
            threadOf: {
                populate: {
                    authorUser: boolean | {
                        populate: {
                            avatar: boolean;
                        };
                    };
                };
            };
            reports: {
                where: {
                    resolved: boolean;
                };
            };
        };
    };
    findReports: {
        getDefaultWhere(): Where;
        createParams(orderBy: adminValidator.CommentFindAllSchema['orderBy'], page: adminValidator.CommentFindAllSchema['page'], pageSize: adminValidator.CommentFindAllSchema['pageSize'], _q: adminValidator.CommentFindAllSchema['_q']): Partial<DBQuery>;
    };
    findOneAndThread: {
        getDefaultWhere(removed?: boolean): {
            $or: ({
                removed: boolean;
            } | {
                removed: {
                    $notNull: boolean;
                };
            })[];
        } | {
            $or?: undefined;
        };
        getPopulate(): {
            populate: {
                authorUser: boolean | {
                    populate: {
                        avatar: boolean;
                    };
                };
                threadOf: {
                    populate: {
                        authorUser: boolean | {
                            populate: {
                                avatar: boolean;
                            };
                        };
                        reports: {
                            where: {
                                resolved: boolean;
                            };
                        };
                    };
                };
                reports: {
                    where: {
                        resolved: boolean;
                    };
                };
            };
        };
    };
};
