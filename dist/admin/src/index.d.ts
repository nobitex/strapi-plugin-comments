declare const _default: {
    register(app: any): void;
    registerTrads: ({ locales }: {
        locales: string[];
    }) => Promise<{
        data: import("@sensinum/strapi-utils").TradOptions;
        locale: string;
    }[]>;
};
export default _default;
