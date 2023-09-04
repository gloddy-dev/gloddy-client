'use client';

import { type Comment, useDeleteComment, useGetComments, useGetGroupDetail } from '@/apis/groups';
import WarningModal from '@/app/(main)/grouping/components/WarningModal.client';
import { Avatar } from '@/components/Avatar';
import CardHeader from '@/components/Card/CardHeader.client';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';
import { Flex } from '@/components/Layout';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';
import Image from 'next/image';
import { Fragment } from 'react';

export default function CommentList() {
  const { articleId, groupId } = useNumberParams<['articleId', 'groupId']>();
  const { data: commentsData } = useGetComments(groupId, articleId);
  const { data: groupDetailData } = useGetGroupDetail(groupId);

  const { isCaptain } = groupDetailData;

  if (commentsData.comments.length === 0)
    return (
      <Flex direction="column" justify="center" align="center" className="my-80">
        <Image src="/icons/48/cancel.svg" alt="cancel" width={48} height={48} />
        <Spacing size={8} />
        <p className="text-sign-tertiary">첫 댓글을 남겨보세요!</p>
      </Flex>
    );

  return (
    <div>
      {commentsData.comments.map((comment) => (
        <Fragment key={comment.commentId}>
          <CommentItem
            comment={comment}
            groupId={groupId}
            articleId={articleId}
            isCaptain={isCaptain}
          />
          <Divider thickness="thin" />
        </Fragment>
      ))}
    </div>
  );
}
interface CommentItemProps {
  comment: Comment;
  groupId: number;
  articleId: number;
  isCaptain: boolean;
}

function CommentItem({ comment, articleId, groupId, isCaptain }: CommentItemProps) {
  const { content, commentId } = comment;

  const { mutate: mutateDeleteComment } = useDeleteComment(groupId, articleId);

  const handleDeleteClick = (close: () => void) => {
    mutateDeleteComment(
      {
        commentId,
        groupId,
        articleId,
      },
      {
        onSettled: close,
      }
    );
  };

  return (
    <Flex direction="column" className="m-20 mb-20 px-4">
      <CardHeader
        type="comment"
        groupId={groupId}
        articleId={articleId}
        isCaptain={isCaptain}
        onOkDeleteClick={handleDeleteClick}
        showMoreIcon
        {...comment}
      />
      <Spacing size={8} />
      <div className="break-words text-paragraph-2 text-sign-primary">{content}</div>
    </Flex>
  );
}
