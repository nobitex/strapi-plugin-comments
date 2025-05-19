import { FC } from 'react';
import { CommentDetails, Config, ContentType } from '../../api/schemas';
type DetailsEntryProps = {
    readonly config: Config;
    readonly entity: CommentDetails['entity'];
    readonly filters: Record<string, unknown>;
    readonly onChangeFilters: (filters: Record<string, unknown>) => void;
    readonly schema: ContentType['data']['schema'];
};
export declare const DetailsEntry: FC<DetailsEntryProps>;
export {};
