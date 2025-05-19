import { FC } from 'react';
import { Report } from '../../api/schemas';
type ReportsTableRowProps = {
    item: Report;
    isChecked: boolean;
    onSelectionChange: (id: number) => void;
};
export declare const ReportsTableRow: FC<ReportsTableRowProps>;
export {};
