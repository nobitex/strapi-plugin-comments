import { FC } from "react";
type CommentStatusFiltersProps = {
    setQueryParams: (nextParams: object, method?: "push" | "remove", replace?: boolean) => void;
};
export declare const CommentsStatusFilters: FC<CommentStatusFiltersProps>;
export {};
