import { FC, useState, useEffect } from "react"
import { useQueryParams } from "@strapi/strapi/admin";
import { SingleSelect, SingleSelectOption } from '@strapi/design-system';


type CommentStatusFiltersProps = {
    filterOptions: string[]
};

type QueryParams = {
    filters?: {
        section?: string;
        [key: string]: any;
    };
    [key: string]: any;
};

export const CommentsSectionFilters: FC<CommentStatusFiltersProps> = ({ filterOptions }) => {
    const [{ query }, setQueryParams] = useQueryParams<QueryParams>();
    const [currentFilter, setCurrentFilter] = useState<string | undefined>(query.filters?.section);

    // Sync currentFilter with query changes
    useEffect(() => {
        setCurrentFilter(query.filters?.section);
    }, [query.filters?.section]);

    const handleChange = (filter: string | undefined) => {
        setCurrentFilter(filter);
        setQueryParams({
            ...query,
            page: {}, // Reset pagination when filter changes
            filters: {
                ...query.filters,
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
            {filterOptions && filterOptions.length > 0 ? filterOptions.map(option => (
                <SingleSelectOption key={option} value={option}>
                    {option}
                </SingleSelectOption>
            )) : (
                <SingleSelectOption value="" disabled>
                    No sections available
                </SingleSelectOption>
            )}
        </SingleSelect>
    );
};