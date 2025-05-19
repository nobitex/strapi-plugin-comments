import { z } from 'zod';
export declare const paginationSchema: z.ZodObject<{
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    pageCount: z.ZodNumber;
    total: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    page?: number;
    pageSize?: number;
    pageCount?: number;
    total?: number;
}, {
    page?: number;
    pageSize?: number;
    pageCount?: number;
    total?: number;
}>;
export type Pagination = z.infer<typeof paginationSchema>;
export declare const shouldValidateObject: <T extends z.ZodRawShape>(isValidateEnabled: boolean, validator: z.ZodObject<T>) => (value: unknown) => Promise<z.ZodObject<T>['_output']>;
export declare const shouldValidateArray: <T extends z.ZodTypeAny>(isValidateEnabled: boolean, validator: z.ZodArray<T>) => (value: unknown) => Promise<z.ZodArray<T>['_output']>;
