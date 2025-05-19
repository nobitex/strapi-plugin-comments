export type TranslationKey = keyof typeof trads;
declare const trads: {
    en: () => Promise<typeof import("./en")>;
    fr: () => Promise<typeof import("./fr")>;
    'pt-BR': () => Promise<typeof import("./pt-BR")>;
    tr: () => Promise<typeof import("./tr")>;
    ru: () => Promise<typeof import("./ru")>;
    'zh-Hans': () => Promise<typeof import("./zh-Hans")>;
    pl: () => Promise<typeof import("./pl")>;
};
export default trads;
