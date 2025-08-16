import { Table, Tbody, Th, Thead, Tr, Typography } from '@strapi/design-system';
import { Layouts, Page, Pagination, SearchInput, useQueryParams } from '@strapi/strapi/admin';
import {FC} from 'react';
import { Config } from '../../api/schemas';
import { CommentRow } from '../../components/CommentRow';
import { CommentsStatusFilters } from '../../components/CommentStatusFilters';
import { SortableTh } from '../../components/SortableTh';
import { useCommentsAll } from '../../hooks/useCommentsAll';
import { getMessage } from '../../utils';
import {CommentsSectionFilters} from "../../components/CommentSectionFilter";

const tableHeaders = [
  { label: "page.discover.table.header.id" },
  { label: "page.discover.table.header.author" },
  { label: "page.discover.table.header.message", orderBy: "content" },
  { label: "page.discover.table.header.thread" },
  { label: "page.discover.table.header.entry" },
  { label: "page.discover.table.header.lastUpdate", orderBy: "updatedAt" },
  { label: "page.discover.table.header.status" },
];
const getUniqueSectionValues = (result: Array<Record<string, any>>): string[] => {
  const allSections = result
      .map((item) => item.section)
      .filter((section): section is string => typeof section === 'string');
  return Array.from(new Set(allSections));
};

export const Discover: FC<{ config: Config }> = ({ config }) => {
  const [{ query: queryParams }, setQueryParams] = useQueryParams();


  const { data: { result, pagination } } = useCommentsAll(queryParams as Record<string, any>);
  const sections = getUniqueSectionValues(result);
  return (
    <>
      <Page.Title children={'Comments - discover'} />
      <Page.Main>
        <Layouts.Header
          title={getMessage('page.discover.header')}
          subtitle={getMessage(
            {
              id: `page.discover.header.count`,
              props: {
                count: pagination.total,
              },
            },
            `${pagination.total} entries found`
          )}
          as="h2"
        />
        <Layouts.Action startActions={
          <>
            <SearchInput label={getMessage('common.search', "Search")} />
            <CommentsStatusFilters />
            <CommentsSectionFilters filterOptions={sections} />
          </>
        }/>
        <Layouts.Content>
          <Table>
            <Thead>
              <Tr>
                {tableHeaders.map(({ label, orderBy }) => (
                  <>
                    {!orderBy ? (
                      <Th>
                        <Typography variant="sigma">
                          {getMessage(label)}
                        </Typography>
                      </Th>
                    ) : (
                      <SortableTh
                        label={getMessage(label)}
                        orderByKey={orderBy}
                      />
                    )}
                  </>
                ))}
                <Th />
              </Tr>
            </Thead>
            <Tbody>
              {result.map((comment) => (
                <CommentRow
                  key={comment.id}
                  item={comment}
                />
              ))}
            </Tbody>
          </Table>
          <Pagination.Root pageCount={pagination.pageCount} total={pagination.total}>
            <Pagination.PageSize />
            <Pagination.Links />
          </Pagination.Root>
        </Layouts.Content>
      </Page.Main>
    </>
  );
};

