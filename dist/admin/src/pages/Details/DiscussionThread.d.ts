import { FC } from 'react';
import { CommentDetails } from '../../api/schemas';
import { AllowedActions } from '../../types';
type DiscussionThreadProps = {
    readonly allowedActions: AllowedActions;
    readonly isReloading: boolean;
    readonly level: CommentDetails['level'];
    readonly selected: CommentDetails['selected'];
};
export declare const DiscussionThread: FC<DiscussionThreadProps>;
export {};
