import { z } from 'zod';
import { ExtractRightEither } from '../../../utils/Either';
export declare const baseAdminPanelQuery: z.ZodObject<{
    pageSize: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, z.ZodNumber>>;
    page: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, z.ZodNumber>>;
    orderBy: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    filters: z.ZodOptional<z.ZodObject<{
        removed: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodUnion<[z.ZodObject<{
            $eq: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $eq?: string;
        }, {
            $eq?: string;
        }>, z.ZodObject<{
            $eqi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $eqi?: string;
        }, {
            $eqi?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $ne: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $ne?: string;
        }, {
            $ne?: string;
        }>, z.ZodObject<{
            $nei: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $nei?: string;
        }, {
            $nei?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $gt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $gt?: string;
        }, {
            $gt?: string;
        }>, z.ZodObject<{
            $gte: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $gte?: string;
        }, {
            $gte?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $lt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $lt?: string;
        }, {
            $lt?: string;
        }>, z.ZodObject<{
            $lte: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $lte?: string;
        }, {
            $lte?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $startsWith: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $startsWith?: string;
        }, {
            $startsWith?: string;
        }>, z.ZodObject<{
            $startsWithi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $startsWithi?: string;
        }, {
            $startsWithi?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $endsWith: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $endsWith?: string;
        }, {
            $endsWith?: string;
        }>, z.ZodObject<{
            $endsWithi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $endsWithi?: string;
        }, {
            $endsWithi?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $contains: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $contains?: string;
        }, {
            $contains?: string;
        }>, z.ZodObject<{
            $containsi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $containsi?: string;
        }, {
            $containsi?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $notContains: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $notContains?: string;
        }, {
            $notContains?: string;
        }>, z.ZodObject<{
            $notContainsi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $notContainsi?: string;
        }, {
            $notContainsi?: string;
        }>]>, z.ZodObject<{
            $null: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $null?: string;
        }, {
            $null?: string;
        }>, z.ZodObject<{
            $notNull: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            $notNull?: boolean;
        }, {
            $notNull?: boolean;
        }>]>;
        approvalStatus: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodUnion<[z.ZodObject<{
            $eq: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $eq?: string;
        }, {
            $eq?: string;
        }>, z.ZodObject<{
            $eqi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $eqi?: string;
        }, {
            $eqi?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $ne: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $ne?: string;
        }, {
            $ne?: string;
        }>, z.ZodObject<{
            $nei: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $nei?: string;
        }, {
            $nei?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $gt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $gt?: string;
        }, {
            $gt?: string;
        }>, z.ZodObject<{
            $gte: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $gte?: string;
        }, {
            $gte?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $lt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $lt?: string;
        }, {
            $lt?: string;
        }>, z.ZodObject<{
            $lte: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $lte?: string;
        }, {
            $lte?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $startsWith: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $startsWith?: string;
        }, {
            $startsWith?: string;
        }>, z.ZodObject<{
            $startsWithi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $startsWithi?: string;
        }, {
            $startsWithi?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $endsWith: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $endsWith?: string;
        }, {
            $endsWith?: string;
        }>, z.ZodObject<{
            $endsWithi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $endsWithi?: string;
        }, {
            $endsWithi?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $contains: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $contains?: string;
        }, {
            $contains?: string;
        }>, z.ZodObject<{
            $containsi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $containsi?: string;
        }, {
            $containsi?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $notContains: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $notContains?: string;
        }, {
            $notContains?: string;
        }>, z.ZodObject<{
            $notContainsi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $notContainsi?: string;
        }, {
            $notContainsi?: string;
        }>]>, z.ZodObject<{
            $null: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $null?: string;
        }, {
            $null?: string;
        }>, z.ZodObject<{
            $notNull: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            $notNull?: boolean;
        }, {
            $notNull?: boolean;
        }>]>;
        section: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodUnion<[z.ZodObject<{
            $eq: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $eq?: string;
        }, {
            $eq?: string;
        }>, z.ZodObject<{
            $eqi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $eqi?: string;
        }, {
            $eqi?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $ne: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $ne?: string;
        }, {
            $ne?: string;
        }>, z.ZodObject<{
            $nei: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $nei?: string;
        }, {
            $nei?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $gt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $gt?: string;
        }, {
            $gt?: string;
        }>, z.ZodObject<{
            $gte: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $gte?: string;
        }, {
            $gte?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $lt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $lt?: string;
        }, {
            $lt?: string;
        }>, z.ZodObject<{
            $lte: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $lte?: string;
        }, {
            $lte?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $startsWith: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $startsWith?: string;
        }, {
            $startsWith?: string;
        }>, z.ZodObject<{
            $startsWithi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $startsWithi?: string;
        }, {
            $startsWithi?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $endsWith: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $endsWith?: string;
        }, {
            $endsWith?: string;
        }>, z.ZodObject<{
            $endsWithi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $endsWithi?: string;
        }, {
            $endsWithi?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $contains: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $contains?: string;
        }, {
            $contains?: string;
        }>, z.ZodObject<{
            $containsi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $containsi?: string;
        }, {
            $containsi?: string;
        }>]>, z.ZodUnion<[z.ZodObject<{
            $notContains: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $notContains?: string;
        }, {
            $notContains?: string;
        }>, z.ZodObject<{
            $notContainsi: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $notContainsi?: string;
        }, {
            $notContainsi?: string;
        }>]>, z.ZodObject<{
            $null: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            $null?: string;
        }, {
            $null?: string;
        }>, z.ZodObject<{
            $notNull: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            $notNull?: boolean;
        }, {
            $notNull?: boolean;
        }>]>;
    } & {
        $or: z.ZodOptional<z.ZodArray<z.ZodObject<{
            blocked: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodUnion<[z.ZodObject<{
                $eq: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $eq?: string;
            }, {
                $eq?: string;
            }>, z.ZodObject<{
                $eqi: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $eqi?: string;
            }, {
                $eqi?: string;
            }>]>, z.ZodUnion<[z.ZodObject<{
                $ne: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $ne?: string;
            }, {
                $ne?: string;
            }>, z.ZodObject<{
                $nei: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $nei?: string;
            }, {
                $nei?: string;
            }>]>, z.ZodUnion<[z.ZodObject<{
                $gt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $gt?: string;
            }, {
                $gt?: string;
            }>, z.ZodObject<{
                $gte: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $gte?: string;
            }, {
                $gte?: string;
            }>]>, z.ZodUnion<[z.ZodObject<{
                $lt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $lt?: string;
            }, {
                $lt?: string;
            }>, z.ZodObject<{
                $lte: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $lte?: string;
            }, {
                $lte?: string;
            }>]>, z.ZodUnion<[z.ZodObject<{
                $startsWith: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $startsWith?: string;
            }, {
                $startsWith?: string;
            }>, z.ZodObject<{
                $startsWithi: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $startsWithi?: string;
            }, {
                $startsWithi?: string;
            }>]>, z.ZodUnion<[z.ZodObject<{
                $endsWith: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $endsWith?: string;
            }, {
                $endsWith?: string;
            }>, z.ZodObject<{
                $endsWithi: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $endsWithi?: string;
            }, {
                $endsWithi?: string;
            }>]>, z.ZodUnion<[z.ZodObject<{
                $contains: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $contains?: string;
            }, {
                $contains?: string;
            }>, z.ZodObject<{
                $containsi: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $containsi?: string;
            }, {
                $containsi?: string;
            }>]>, z.ZodUnion<[z.ZodObject<{
                $notContains: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $notContains?: string;
            }, {
                $notContains?: string;
            }>, z.ZodObject<{
                $notContainsi: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $notContainsi?: string;
            }, {
                $notContainsi?: string;
            }>]>, z.ZodObject<{
                $null: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $null?: string;
            }, {
                $null?: string;
            }>, z.ZodObject<{
                $notNull: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                $notNull?: boolean;
            }, {
                $notNull?: boolean;
            }>]>;
            blockedThread: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodUnion<[z.ZodObject<{
                $eq: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $eq?: string;
            }, {
                $eq?: string;
            }>, z.ZodObject<{
                $eqi: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $eqi?: string;
            }, {
                $eqi?: string;
            }>]>, z.ZodUnion<[z.ZodObject<{
                $ne: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $ne?: string;
            }, {
                $ne?: string;
            }>, z.ZodObject<{
                $nei: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $nei?: string;
            }, {
                $nei?: string;
            }>]>, z.ZodUnion<[z.ZodObject<{
                $gt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $gt?: string;
            }, {
                $gt?: string;
            }>, z.ZodObject<{
                $gte: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $gte?: string;
            }, {
                $gte?: string;
            }>]>, z.ZodUnion<[z.ZodObject<{
                $lt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $lt?: string;
            }, {
                $lt?: string;
            }>, z.ZodObject<{
                $lte: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $lte?: string;
            }, {
                $lte?: string;
            }>]>, z.ZodUnion<[z.ZodObject<{
                $startsWith: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $startsWith?: string;
            }, {
                $startsWith?: string;
            }>, z.ZodObject<{
                $startsWithi: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $startsWithi?: string;
            }, {
                $startsWithi?: string;
            }>]>, z.ZodUnion<[z.ZodObject<{
                $endsWith: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $endsWith?: string;
            }, {
                $endsWith?: string;
            }>, z.ZodObject<{
                $endsWithi: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $endsWithi?: string;
            }, {
                $endsWithi?: string;
            }>]>, z.ZodUnion<[z.ZodObject<{
                $contains: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $contains?: string;
            }, {
                $contains?: string;
            }>, z.ZodObject<{
                $containsi: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $containsi?: string;
            }, {
                $containsi?: string;
            }>]>, z.ZodUnion<[z.ZodObject<{
                $notContains: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $notContains?: string;
            }, {
                $notContains?: string;
            }>, z.ZodObject<{
                $notContainsi: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $notContainsi?: string;
            }, {
                $notContainsi?: string;
            }>]>, z.ZodObject<{
                $null: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                $null?: string;
            }, {
                $null?: string;
            }>, z.ZodObject<{
                $notNull: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                $notNull?: boolean;
            }, {
                $notNull?: boolean;
            }>]>;
        }, z.UnknownKeysParam, z.ZodTypeAny, {
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
        }, {
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
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
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
        section?: string | number | {
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
        }[];
    }, {
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
        section?: string | number | {
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
        }[];
    }>>;
} & {
    _q: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    page?: number;
    pageSize?: number;
    _q?: string;
    orderBy?: string;
    filters?: {
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
        section?: string | number | {
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
        }[];
    };
}, {
    page?: string | number;
    pageSize?: string | number;
    _q?: string;
    orderBy?: string;
    filters?: {
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
        section?: string | number | {
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
        }[];
    };
}>;
export declare const getIdValidator: (params: unknown) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    id?: number;
}>;
export type IdValidatorSchema = ExtractRightEither<ReturnType<typeof getIdValidator>>;
export declare const getCommentFindAllValidator: (query: unknown) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    page?: number;
    pageSize?: number;
    _q?: string;
    orderBy?: string;
    filters?: {
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
        section?: string | number | {
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
        }[];
    };
}>;
export type CommentFindAllSchema = ExtractRightEither<ReturnType<typeof getCommentFindAllValidator>>;
export declare const getReportFindReportsValidator: (query: unknown) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    page?: number;
    pageSize?: number;
    _q?: string;
    orderBy?: string;
    filters?: {
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
        section?: string | number | {
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
        }[];
    };
}>;
export type ReportFindReportsValidator = ExtractRightEither<ReturnType<typeof getReportFindReportsValidator>>;
export declare const getCommentFindOneValidator: (id: string | number, params: object) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    id?: number;
    removed?: boolean;
}>;
export type FindOneValidatorSchema = ExtractRightEither<ReturnType<typeof getCommentFindOneValidator>>;
export declare const getCommentResolveAbuseReportValidator: (params: unknown) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    id?: number;
    reportId?: number;
}>;
export type CommentResolveAbuseReportValidatorSchema = ExtractRightEither<ReturnType<typeof getCommentResolveAbuseReportValidator>>;
export declare const getCommentResolveMultipleAbuseReportsValidator: (params: unknown) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    id?: number;
    reportIds?: number[];
}>;
export type CommentResolveMultipleAbuseReportsValidatorSchema = ExtractRightEither<ReturnType<typeof getCommentResolveMultipleAbuseReportsValidator>>;
export declare const getReportsMultipleAbuseValidator: (params: unknown) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    reportIds?: number[];
}>;
export type ReportsMultipleAbuseValidator = ExtractRightEither<ReturnType<typeof getReportsMultipleAbuseValidator>>;
export declare const postCommentValidator: z.ZodObject<{
    id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    content: z.ZodString;
    author: z.ZodObject<{
        id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
        email: z.ZodString;
        lastname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        firstname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | number;
        email?: string;
        lastname?: string;
        username?: string;
        firstname?: string;
    }, {
        id?: string | number;
        email?: string;
        lastname?: string;
        username?: string;
        firstname?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    id?: string | number;
    content?: string;
    author?: {
        id?: string | number;
        email?: string;
        lastname?: string;
        username?: string;
        firstname?: string;
    };
}, {
    id?: string | number;
    content?: string;
    author?: {
        id?: string | number;
        email?: string;
        lastname?: string;
        username?: string;
        firstname?: string;
    };
}>;
export declare const getCommentPostValidator: (params: unknown) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    id?: string | number;
    content?: string;
    author?: {
        id?: string | number;
        email?: string;
        lastname?: string;
        username?: string;
        firstname?: string;
    };
}>;
export type CommentPostValidatorSchema = z.infer<typeof postCommentValidator>;
export declare const getUpdateCommentValidator: (params: unknown) => import("../../../utils/Either").Left<import("../../../utils/PluginError").default> | import("../../../utils/Either").Right<{
    id?: string | number;
    content?: string;
}>;
export type UpdateCommentValidatorSchema = ExtractRightEither<ReturnType<typeof getUpdateCommentValidator>>;
