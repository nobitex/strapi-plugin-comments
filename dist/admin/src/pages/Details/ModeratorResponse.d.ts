import { FC } from 'react';
type ModeratorResponseProps = {
    readonly id: number;
    readonly blockedThread: boolean | null;
};
export declare const ModeratorResponse: FC<ModeratorResponseProps>;
export {};
