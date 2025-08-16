import { FC, useState } from "react"
import { useQueryParams } from "@strapi/strapi/admin";
import { SingleSelect, SingleSelectOption } from '@strapi/design-system';


type CommentStatusFiltersProps = {
    filterOptions: string[]
};

export const CommentsSectionFilters: FC<CommentStatusFiltersProps> = ({ filterOptions }) => {
    const [_, setQueryParams] = useQueryParams();
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
            placeholder={'Filter by Section'}
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