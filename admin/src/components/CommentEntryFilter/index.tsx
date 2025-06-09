import { FC, useState } from "react"
import { getMessage } from "../../utils";
import { COMMENT_STATUS } from '../../utils/constants';
import { SingleSelect, SingleSelectOption } from '@strapi/design-system';


type CommentStatusFiltersProps = {
    setQueryParams: (nextParams: object, method?: "push" | "remove", replace?: boolean) => void;
    filterOptions: string[]
};

export const CommentsEntryFilters: FC<CommentStatusFiltersProps> = ({ setQueryParams, filterOptions }) => {
    const [currentFilter, setCurrentFilter] = useState<string>();

    const handleChange = (filter: string | undefined) => {
        setCurrentFilter(filter)
        setQueryParams({
            filters: {
                section: filter
            }
        });
    }

    return (
        <SingleSelect
            placeholder={'Filter by Entry'}
            value={currentFilter}
            onClear={() => handleChange(undefined)}
            onChange={handleChange}
        >
            {filterOptions.map(option => (
                <SingleSelectOption value={option}>
                    {option}
                </SingleSelectOption>
            ))}
        </SingleSelect>
    );
};