import { Table, Tbody, Th, Thead, Tr, Typography } from '@strapi/design-system';
import { Layouts, Page, Pagination, SearchInput, useQueryParams } from '@strapi/strapi/admin';
import {FC} from 'react';
import { Config } from '../../api/schemas';
import { CommentRow } from '../../components/CommentRow';
import { CommentsStatusFilters } from '../../components/CommentStatusFilters';
import { useCommentsAll } from '../../hooks/useCommentsAll';
import { getMessage } from '../../utils';
import {CommentsEntryFilters} from "../../components/CommentEntryFilter";

const getUniqueEntryValues = (result: Array<Record<string, any>>): string[] => {
  const allEntries = result
      .map((item) => item.entry)
      .filter((entry): entry is string => typeof entry === 'string');
  return Array.from(new Set(allEntries));
};

export const Discover: FC<{ config: Config }> = ({ config }) => {
  const [{ query: queryParams }, setQueryParams] = useQueryParams();


  const { data: { result, pagination } } = useCommentsAll(queryParams as Record<string, any>);
  const entries = getUniqueEntryValues(result);
  return (
    <>
      <Page.Title children={'Comments - discover'} />
      <Page.Main>
        <Layouts.Header
          title={getMessage('page.discover.header')}
          subtitle={`${pagination.total} entries found`}
          as="h2"
        />
        <Layouts.Action startActions={
          <>
            <SearchInput label="Search" />
            <CommentsStatusFilters setQueryParams={setQueryParams}/>
            <CommentsEntryFilters setQueryParams={setQueryParams} filterOptions={entries} />
          </>
        }/>
        <Layouts.Content>
          <Table>
            <Thead>
              <Tr>
                <Th>
                  <Typography variant="sigma">
                    {getMessage('page.discover.table.header.id')}
                  </Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">
                    {getMessage('page.discover.table.header.author')}
                  </Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">
                    {getMessage('page.discover.table.header.message')}
                  </Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">
                    {getMessage('page.discover.table.header.thread')}
                  </Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">
                    {getMessage('page.discover.table.header.entry')}
                  </Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">
                    {getMessage('page.discover.table.header.lastUpdate')}
                  </Typography>
                </Th>
                <Th>
                  <Typography variant="sigma">
                    {getMessage('page.discover.table.header.status')}
                  </Typography>
                </Th>
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

