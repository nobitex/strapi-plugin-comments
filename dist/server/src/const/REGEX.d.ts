export declare const REGEX: {
    readonly uid: RegExp;
    readonly relatedUid: RegExp;
    readonly email: RegExp;
    readonly sorting: RegExp;
};
export declare const CONFIG_PARAMS: {
    readonly ENABLED_COLLECTIONS: "enabledCollections";
    readonly APPROVAL_FLOW: "approvalFlow";
    readonly ENTRY_LABEL: "entryLabel";
    readonly MODERATOR_ROLES: "moderatorRoles";
    readonly BAD_WORDS: "badWords";
    readonly AUTHOR_BLOCKED_PROPS: "blockedAuthorProps";
};
export declare enum APPROVAL_STATUS {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}
