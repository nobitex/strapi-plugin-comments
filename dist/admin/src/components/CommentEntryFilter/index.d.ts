import { FC } from "react";
type CommentStatusFiltersProps = {
    setQueryParams: (nextParams: object, method?: "push" | "remove", replace?: boolean) => void;
    filterOptions: string[];
};
export declare const CommentsEntryFilters: FC<CommentStatusFiltersProps>;
export {};
