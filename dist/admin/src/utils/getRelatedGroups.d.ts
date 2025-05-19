type Config = {
    regex: {
        relatedUid: string;
    };
};
declare const getRelatedGroups: (related: string, config: Config) => string[];
export default getRelatedGroups;
