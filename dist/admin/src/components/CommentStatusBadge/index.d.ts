import { FC } from 'react';
import { Comment } from '../../api/schemas';
export declare const CommentStatusBadge: FC<{
    item: Comment;
    canAccessReports: boolean;
    hasReports: boolean;
}>;
