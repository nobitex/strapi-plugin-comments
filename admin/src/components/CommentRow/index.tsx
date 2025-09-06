import { Flex, IconButton, Link, Td, Tooltip, Tr, Typography } from '@strapi/design-system';
import { Eye, Trash } from '@strapi/icons';
import {first, isEmpty, isNil} from 'lodash';
import {FC, SyntheticEvent, useMemo, useState} from 'react';
import { useIntl } from 'react-intl';
import {useNavigate} from 'react-router-dom';
import {Comment} from '../../api/schemas';
import { useAPI } from '../../hooks/useAPI';
import { useCommentMutations } from '../../hooks/useCommentMutations';
import { usePermissions } from '../../hooks/usePermissions';
import { getMessage } from '../../utils';
import { ApproveFlow } from '../ApproveFlow';
import { CommentStatusBadge } from '../CommentStatusBadge';
import { ConfirmationDialog } from '../ConfirmationDialog';
import { IconButtonGroup } from '../IconButtonGroup';
import { ReviewFlow } from '../ReviewFlow';
import { UserAvatar } from '../UserAvatar';

type Props = {
  readonly item: Comment;
};
export const CommentRow: FC<Props> = ({ item }) => {
  const {
    canAccessReports,
    canModerate,
    canReviewReports,
  } = usePermissions();
  const api = useAPI();
  const navigate = useNavigate();
  const { formatDate } = useIntl();
  const { commentMutation } = useCommentMutations({
    comment: {
      deleteSuccess: () => {
        // Refresh the comments list
        window.location.reload();
      },
    },
  });



  const hasReports = !isEmpty(item.reports?.filter((_) => !_.resolved));

  const reviewFlowEnabled = canAccessReports && hasReports && !(item.blocked || item.blockedThread);
  const gotApprovalFlow = !isNil(item.approvalStatus);

  const needsApproval = gotApprovalFlow && item.approvalStatus === 'PENDING';

  const onClickDetails = (id: number) => (evt: SyntheticEvent) => {
    evt.preventDefault();
    evt.stopPropagation();
    navigate(id.toString());
  };

  const handleDeleteConfirm = () => {
    commentMutation.delete.mutate(item.id);
  };


  const contentTypeLink = useMemo(() => {
    const related = item.related;
    if (!related || typeof related === 'string') return null;

    const localeParam = related.locale ? `?plugins[i18n][locale]=${related.locale}` : '';

    return (
      <Tooltip label={related.title}>
        <Link 
          width="100%"
          overflow="hidden"
          href={`/admin/content-manager/collection-types/${related.uid}/${related.documentId}${localeParam}`}
        >
          {related.title}
        </Link>
      </Tooltip>
    );
  }, [item.related]);

  const { name, email, avatar } = item.author || {};

  // @ts-ignore
    return (
    <Tr>
      <Td>
        <Typography>{item.id}</Typography>
      </Td>
      <Td>
        <Tooltip
          open={item.isAdminComment ? false : undefined}
          label={!item.isAdminComment ? email : undefined}
          align="start"
          side="left">
          <Flex gap={2} style={{ cursor: item.isAdminComment ? 'default' : 'help' }}>
            {item.author && (
              <UserAvatar
                name={name || ''}
                avatar={avatar}
                isAdminComment={item.isAdminComment}
              />
            )}
            <Typography>{name || getMessage('components.author.unknown')}</Typography>
          </Flex>
        </Tooltip>
      </Td>
      <Td maxWidth="200px">
        <Typography ellipsis>{item.content}</Typography>
      </Td>
      <Td>
        {item.threadOf ? (
          <Link href={`discover/${item.threadOf.id}`} onClick={onClickDetails(item.threadOf.id)}>
            {getMessage(
              {
                id: 'page.discover.table.cell.thread',
                props: { id: item.threadOf.id },
              },
              '#' + item.threadOf.id,
            )}
          </Link>
        ) : '-'}
      </Td>
      <Td maxWidth="200px">
        {item.section ?? contentTypeLink ?? '-'}
      </Td>
      <Td>
        <Typography>
          {formatDate(item.updatedAt || item.createdAt, {
            dateStyle: 'long',
            timeStyle: 'short',
          })}
        </Typography>
      </Td>
      <Td>
        <CommentStatusBadge
          item={item}
          canAccessReports={canAccessReports}
          hasReports={hasReports}
        />
      </Td>
      <Td>
        <Flex direction="column" alignItems="flex-end">
          <IconButtonGroup isSingle={!(reviewFlowEnabled || (canModerate && needsApproval) || canModerate)}>
            {canModerate && needsApproval && (
              <ApproveFlow
                id={item.id}
                canModerate={canModerate}
                queryKey={api.comments.findAll.getKey()}
              />
            )}
            {canReviewReports && <ReviewFlow item={item} />}
            {canModerate && (
              <ConfirmationDialog
                title={getMessage("page.details.actions.comment.delete", "Delete comment")}
                labelConfirm={getMessage("page.details.actions.comment.delete", "Delete")}
                labelCancel={getMessage("common.button.cancel", "Cancel")}
                onConfirm={handleDeleteConfirm}
                Trigger={({ onClick }) => (
                  <IconButton
                    onClick={onClick}
                    label={getMessage("page.details.actions.comment.delete", "Delete comment")}
                    loading={commentMutation.delete.isPending}
                  >
                    <Trash />
                  </IconButton>
                )}
              >
                {getMessage("page.details.actions.comment.delete.confirmation", "Are you sure you want to delete this comment? This action cannot be undone.")}
              </ConfirmationDialog>
            )}
            <IconButton
              onClick={onClickDetails(item.id)}
              label={getMessage("page.details.filters.label", "View")}
            >
              <Eye />
            </IconButton>
          </IconButtonGroup>
        </Flex>
      </Td>
    </Tr>
  );
};
