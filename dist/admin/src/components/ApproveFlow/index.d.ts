import { FC } from 'react';
import { AllowedActions } from '../../types';
export declare const ApproveFlow: FC<{
    id: number;
    canModerate: AllowedActions['canModerate'];
    queryKey?: string[];
}>;
