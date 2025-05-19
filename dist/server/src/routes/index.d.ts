declare const routes: {
    'content-api': {
        type: string;
        routes: import("../@types").StrapiRoute<"client">[];
    };
    admin: {
        type: string;
        routes: (import("../@types").StrapiRoute<"admin"> | import("../@types").StrapiRoute<"settings">)[];
    };
};
export default routes;
