declare const _default: {
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
                enum: import("../../const").REPORT_REASON[];
                default: import("../../const").REPORT_REASON;
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
export default _default;
