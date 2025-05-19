import { FC } from 'react';
import { Report } from '../../api/schemas';
type BlockMenuProps = {
    item: Report;
    type?: 'icon' | 'button';
};
export declare const BlockMenu: FC<BlockMenuProps>;
export {};
