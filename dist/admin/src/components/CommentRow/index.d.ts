import { FC } from 'react';
import { Comment, Config } from '../../api/schemas';
type Props = {
    readonly item: Comment;
    readonly config: Config;
};
export declare const CommentRow: FC<Props>;
export {};
