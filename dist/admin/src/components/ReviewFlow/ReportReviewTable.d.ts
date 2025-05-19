import { FC } from 'react';
import { CommentReport } from '../../api/schemas';
import { AllowedActions } from '../../types';
type Props = {
    commentId: number;
    reports: CommentReport[];
    selectedItems: number[];
    allowedActions: AllowedActions;
    onBlockButtonsStateChange: (disabled: boolean) => void;
    onSelectionChange: (items: number[]) => void;
};
export declare const ReportReviewTable: FC<Props>;
export {};
