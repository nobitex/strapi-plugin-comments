import { z, ZodArray, ZodObject } from 'zod';
import PluginError from '../utils/PluginError';
export declare const equalValidators: z.ZodUnion<[z.ZodObject<{
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
}>]>;
export declare const notEqualValidators: z.ZodUnion<[z.ZodObject<{
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
}>]>;
export declare const grantThenValidators: z.ZodUnion<[z.ZodObject<{
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
}>]>;
export declare const lessThenValidators: z.ZodUnion<[z.ZodObject<{
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
}>]>;
export declare const startWithValidators: z.ZodUnion<[z.ZodObject<{
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
}>]>;
export declare const endWithValidators: z.ZodUnion<[z.ZodObject<{
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
}>]>;
export declare const containsValidators: z.ZodUnion<[z.ZodObject<{
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
}>]>;
export declare const notContainsValidators: z.ZodUnion<[z.ZodObject<{
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
}>]>;
export declare const stringToNumberValidator: z.ZodPipeline<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, z.ZodNumber>;
export declare const stringToBooleanValidator: z.ZodPipeline<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodBoolean]>, boolean, string | boolean>, z.ZodBoolean>;
export declare const qOperatorValidator: z.ZodObject<{
    _q: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    _q?: string;
}, {
    _q?: string;
}>;
export declare const orderByValidator: z.ZodString;
export declare const filtersValidator: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodUnion<[z.ZodObject<{
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
export declare const getFiltersOperators: <T extends Record<string, boolean>>(dictionary: T) => z.ZodObject<{ [key in keyof T]: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodUnion<[z.ZodObject<{
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
}>]>; }, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{ [key in keyof T]: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodUnion<[z.ZodObject<{
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
}>]>; }>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{ [key in keyof T]: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodUnion<[z.ZodObject<{
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
}>]>; }>, any>[k]; } : never, z.baseObjectInputType<{ [key in keyof T]: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodUnion<[z.ZodObject<{
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
}>]>; }> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<{ [key in keyof T]: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodUnion<[z.ZodObject<{
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
}>]>; }>[k_1]; } : never>;
export declare const AVAILABLE_OPERATORS: {
    readonly single: "single";
    readonly array: "array";
};
type Result<T extends Record<string, keyof typeof AVAILABLE_OPERATORS>> = ZodObject<{
    [key in keyof T]: T[key] extends typeof AVAILABLE_OPERATORS.single ? typeof stringToNumberValidator : ZodArray<typeof stringToNumberValidator>;
}>;
export declare const getStringToNumberValidator: <T extends Record<string, "array" | "single">>(dictionary: T) => Result<T>;
export declare const queryPaginationSchema: z.ZodObject<{
    pageSize: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, z.ZodNumber>>;
    page: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, z.ZodNumber>>;
} & {
    _q: z.ZodOptional<z.ZodString>;
} & {
    orderBy: z.ZodNullable<z.ZodOptional<z.ZodString>>;
} & {
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
export declare const validate: <I, O>(result: z.SafeParseReturnType<I, O>) => import("../utils/Either").Left<PluginError> | import("../utils/Either").Right<O>;
export declare const getRelationValidator: (enabledCollections: string[]) => z.ZodEffects<z.ZodString, `${string}::${string}.${string}`, string>;
export declare const externalAuthorSchema: z.ZodObject<{
    id: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    id?: string | number;
    email?: string;
    avatar?: string;
}, {
    name?: string;
    id?: string | number;
    email?: string;
    avatar?: string;
}>;
export declare const primitiveUnion: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>;
export {};
