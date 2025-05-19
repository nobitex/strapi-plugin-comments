import { FC } from 'react';
import { Author } from '../../api/schemas';
type Props = Readonly<Pick<Author, 'avatar'> & {
    readonly name?: string | null;
    readonly isAdminComment: boolean | null;
}>;
export declare const UserAvatar: FC<Props>;
export {};
