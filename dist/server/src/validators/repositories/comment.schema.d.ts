import { z } from 'zod';
export declare const dbBaseCommentSchema: z.ZodObject<{
    id: z.ZodNumber;
    documentId: z.ZodNullable<z.ZodString>;
    content: z.ZodString;
    blocked: z.ZodNullable<z.ZodBoolean>;
    blockedThread: z.ZodNullable<z.ZodBoolean>;
    blockReason: z.ZodNullable<z.ZodString>;
    isAdminComment: z.ZodNullable<z.ZodBoolean>;
    removed: z.ZodNullable<z.ZodBoolean>;
    approvalStatus: z.ZodNullable<z.ZodString>;
    related: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodNullable<z.ZodString>;
    publishedAt: z.ZodNullable<z.ZodString>;
    authorId: z.ZodNullable<z.ZodString>;
    authorName: z.ZodNullable<z.ZodString>;
    authorEmail: z.ZodNullable<z.ZodString>;
    authorAvatar: z.ZodNullable<z.ZodString>;
    authorUser: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
        id: z.ZodNumber;
        email: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id?: number;
        email?: string;
    }, {
        id?: number;
        email?: string;
    }>]>>>;
    locale: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id?: number;
    documentId?: string;
    content?: string;
    blocked?: boolean;
    blockedThread?: boolean;
    blockReason?: string;
    isAdminComment?: boolean;
    removed?: boolean;
    approvalStatus?: string;
    related?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    authorId?: string;
    authorName?: string;
    authorEmail?: string;
    authorAvatar?: string;
    authorUser?: string | {
        id?: number;
        email?: string;
    };
    locale?: string;
}, {
    id?: number;
    documentId?: string;
    content?: string;
    blocked?: boolean;
    blockedThread?: boolean;
    blockReason?: string;
    isAdminComment?: boolean;
    removed?: boolean;
    approvalStatus?: string;
    related?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    authorId?: string;
    authorName?: string;
    authorEmail?: string;
    authorAvatar?: string;
    authorUser?: string | {
        id?: number;
        email?: string;
    };
    locale?: string;
}>;
