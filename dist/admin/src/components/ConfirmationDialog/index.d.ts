import { FC, ReactNode } from 'react';
type ConfirmationDialogProps = {
    Trigger: FC<{
        onClick: () => void;
    }>;
    title: string;
    labelCancel?: string;
    labelConfirm: string;
    iconConfirm?: ReactNode;
    onConfirm: () => void | Promise<void>;
    children?: ReactNode;
};
export declare const ConfirmationDialog: FC<ConfirmationDialogProps>;
export {};
