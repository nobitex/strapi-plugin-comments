declare const contentTypes: {
    comment: {
        schema: {
            collectionName: string;
            info: {
                tableName: string;
                singularName: string;
                pluralName: string;
                displayName: string;
                description: string;
                kind: string;
            };
            options: {
                draftAndPublish: boolean;
            };
            pluginOptions: {
                "content-manager": {
                    visible: boolean;
                };
                "content-type-builder": {
                    visible: boolean;
                };
            };
            attributes: {
                content: {
                    type: string;
                    configurable: boolean;
                    required: boolean;
                };
                section: {
                    type: string;
                    configurable: boolean;
                    required: boolean;
                };
                blocked: {
                    type: string;
                    default: boolean;
                    configurable: boolean;
                };
                blockedThread: {
                    type: string;
                    default: boolean;
                    configurable: boolean;
                };
                blockReason: {
                    type: string;
                    configurable: boolean;
                };
                authorUser: {
                    type: string;
                    relation: string;
                    target: string;
                    configurable: boolean;
                };
                authorId: {
                    type: string;
                    configurable: boolean;
                };
                authorName: {
                    type: string;
                    configurable: boolean;
                };
                authorEmail: {
                    type: string;
                    configurable: boolean;
                };
                authorAvatar: {
                    type: string;
                    configurable: boolean;
                };
                isAdminComment: {
                    type: string;
                    configurable: boolean;
                };
                removed: {
                    type: string;
                    configurable: boolean;
                };
                approvalStatus: {
                    type: string;
                    enum: import("../const").APPROVAL_STATUS[];
                    configurable: boolean;
                };
                related: {
                    type: string;
                    configurable: boolean;
                };
                reports: {
                    type: string;
                    relation: string;
                    target: string;
                    mappedBy: string;
                    configurable: boolean;
                };
                threadOf: {
                    type: string;
                    relation: string;
                    target: string;
                    configurable: boolean;
                };
            };
        };
    };
    'comment-report': {
        schema: {
            collectionName: string;
            info: {
                tableName: string;
                singularName: string;
                pluralName: string;
                displayName: string;
                description: string;
                kind: string;
            };
            options: {
                draftAndPublish: boolean;
            };
            pluginOptions: {
                "content-manager": {
                    visible: boolean;
                };
                "content-type-builder": {
                    visible: boolean;
                };
            };
            attributes: {
                content: {
                    type: string;
                    configurable: boolean;
                };
                reason: {
                    type: string;
                    enum: import("../const").REPORT_REASON[];
                    default: import("../const").REPORT_REASON;
                    configurable: boolean;
                    required: boolean;
                };
                resolved: {
                    type: string;
                    default: boolean;
                    configurable: boolean;
                };
                related: {
                    type: string;
                    relation: string;
                    target: string;
                    inversedBy: string;
                    configurable: boolean;
                };
            };
        };
    };
};
export type ContentTypes = typeof contentTypes;
export type KeysContentTypes = keyof ContentTypes;
export type CommentsContentTypes = {
    [K in KeysContentTypes]: `plugin::comments.${K}`;
};
export type ContentTypesUUIDs = CommentsContentTypes[keyof CommentsContentTypes] | 'admin::user' | 'plugin::users-permissions.user';
export default contentTypes;
