import { CommentsPluginConfig } from '../../../config';
import { APPROVAL_STATUS } from '../../../const';
import { ExtractRightEither } from '../../../utils/Either';
export declare const newCommentValidator: (enabledCollections: string[], relation: string, payload: object) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    content?: string;
    approvalStatus?: APPROVAL_STATUS;
    locale?: string;
    section?: string;
    author?: {
        name?: string;
        id?: string | number;
        email?: string;
        avatar?: string;
    };
    threadOf?: string | number;
    relation?: `${string}::${string}.${string}`;
}>;
export type NewCommentValidatorSchema = ExtractRightEither<ReturnType<typeof newCommentValidator>>;
export declare const updateCommentValidator: (enabledCollections: string[], payload: object) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    content?: string;
    author?: {
        name?: string;
        id?: string | number;
        email?: string;
        avatar?: string;
    };
    relation?: `${string}::${string}.${string}`;
    commentId?: number;
}>;
export type UpdateCommentValidatorSchema = ExtractRightEither<ReturnType<typeof updateCommentValidator>>;
export declare const findAllFlatValidator: (enabledCollections: string[], relation: string, payload: object) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    sort?: string;
    locale?: string;
    pagination?: {
        page?: number;
        pageSize?: number;
        withCount?: boolean;
    };
    relation?: `${string}::${string}.${string}`;
    populate?: Record<string, boolean | {
        populate?: boolean;
    }>;
    filters?: {
        id?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        content?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        blocked?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        blockedThread?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        isAdminComment?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        removed?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        approvalStatus?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        createdAt?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        updatedAt?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        authorId?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        authorName?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        authorEmail?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        $or?: {
            id?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            content?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            blocked?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            blockedThread?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            isAdminComment?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            removed?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            approvalStatus?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            createdAt?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            updatedAt?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorId?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorName?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorEmail?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
        }[];
        $and?: {
            id?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            content?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            blocked?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            blockedThread?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            isAdminComment?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            removed?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            approvalStatus?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            createdAt?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            updatedAt?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorId?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorName?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorEmail?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
        }[];
    };
    limit?: number;
    fields?: string[];
    omit?: string[];
    isAdmin?: boolean;
    skip?: number;
}>;
export type FindAllFlatSchema = ExtractRightEither<ReturnType<typeof findAllFlatValidator>>;
export declare const findAllInHierarchyValidator: (enabledCollections: string[], relation: string, payload: object) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    sort?: string;
    locale?: string;
    pagination?: {
        page?: number;
        pageSize?: number;
        withCount?: boolean;
    };
    relation?: `${string}::${string}.${string}`;
    populate?: Record<string, boolean | {
        populate?: boolean;
    }>;
    filters?: {
        id?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        content?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        blocked?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        blockedThread?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        isAdminComment?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        removed?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        approvalStatus?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        createdAt?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        updatedAt?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        authorId?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        authorName?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        authorEmail?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        $or?: {
            id?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            content?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            blocked?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            blockedThread?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            isAdminComment?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            removed?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            approvalStatus?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            createdAt?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            updatedAt?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorId?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorName?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorEmail?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
        }[];
        $and?: {
            id?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            content?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            blocked?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            blockedThread?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            isAdminComment?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            removed?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            approvalStatus?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            createdAt?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            updatedAt?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorId?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorName?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorEmail?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
        }[];
    };
    limit?: number;
    fields?: string[];
    omit?: string[];
    isAdmin?: boolean;
    skip?: number;
    startingFromId?: number;
    dropBlockedThreads?: boolean;
}>;
export type FindAllInHierarchyValidatorSchema = ExtractRightEither<ReturnType<typeof findAllInHierarchyValidator>>;
export declare const findAllPerAuthorValidator: (params: object, payload: object) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    type?: string;
    sort?: string;
    authorId?: string | number;
    locale?: string;
    pagination?: {
        page?: number;
        pageSize?: number;
        withCount?: boolean;
    };
    populate?: Record<string, boolean | {
        populate?: boolean;
    }>;
    filters?: {
        id?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        content?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        blocked?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        blockedThread?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        isAdminComment?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        removed?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        approvalStatus?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        createdAt?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        updatedAt?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        authorId?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        authorName?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        authorEmail?: string | number | {
            $eq?: string;
        } | {
            $eqi?: string;
        } | {
            $ne?: string;
        } | {
            $nei?: string;
        } | {
            $gt?: string;
        } | {
            $gte?: string;
        } | {
            $lt?: string;
        } | {
            $lte?: string;
        } | {
            $startsWith?: string;
        } | {
            $startsWithi?: string;
        } | {
            $endsWith?: string;
        } | {
            $endsWithi?: string;
        } | {
            $contains?: string;
        } | {
            $containsi?: string;
        } | {
            $notContains?: string;
        } | {
            $notContainsi?: string;
        } | {
            $null?: string;
        } | {
            $notNull?: boolean;
        };
        $or?: {
            id?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            content?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            blocked?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            blockedThread?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            isAdminComment?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            removed?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            approvalStatus?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            createdAt?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            updatedAt?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorId?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorName?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorEmail?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
        }[];
        $and?: {
            id?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            content?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            blocked?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            blockedThread?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            isAdminComment?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            removed?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            approvalStatus?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            createdAt?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            updatedAt?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorId?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorName?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
            authorEmail?: string | number | {
                $eq?: string;
            } | {
                $eqi?: string;
            } | {
                $ne?: string;
            } | {
                $nei?: string;
            } | {
                $gt?: string;
            } | {
                $gte?: string;
            } | {
                $lt?: string;
            } | {
                $lte?: string;
            } | {
                $startsWith?: string;
            } | {
                $startsWithi?: string;
            } | {
                $endsWith?: string;
            } | {
                $endsWithi?: string;
            } | {
                $contains?: string;
            } | {
                $containsi?: string;
            } | {
                $notContains?: string;
            } | {
                $notContainsi?: string;
            } | {
                $null?: string;
            } | {
                $notNull?: boolean;
            };
        }[];
    };
    limit?: number;
    fields?: string[];
    omit?: string[];
    isAdmin?: boolean;
    skip?: number;
}>;
export type FindAllPerAuthorValidatorSchema = ExtractRightEither<ReturnType<typeof findAllPerAuthorValidator>>;
export declare const reportAbuseValidator: (config: CommentsPluginConfig, payload: object) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    content?: string;
    reason?: import("../../../const").REPORT_REASON;
    relation?: `${string}::${string}.${string}`;
    commentId?: number;
}>;
export type ReportAbuseValidatorSchema = ExtractRightEither<ReturnType<typeof reportAbuseValidator>>;
export declare const removeCommentValidator: (enabledCollections: string[], payload: object) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    authorId?: string | number;
    relation?: `${string}::${string}.${string}`;
    commentId?: string | number;
}>;
export type RemoveCommentValidatorSchema = ExtractRightEither<ReturnType<typeof removeCommentValidator>>;
