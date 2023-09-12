'use client';

import { type Comment, useGetComments, useGetGroupDetail } from '@/apis/groups';
import { useMoreSheet } from '@/app/[lng]/(main)/grouping/hooks/useMoreSheet';
import { CardHeader } from '@/components/Card';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { ItemList } from '@/components/List';
import { Spacing } from '@/components/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useBlockStore } from '@/store/useBlockStore';

export default function CommentList() {
  const { articleId, groupId } = useNumberParams<['articleId', 'groupId']>();
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { data: commentsData } = useGetComments(groupId, articleId);

  const { isCaptain } = groupDetailData;
  const { comments } = commentsData;

  if (comments.length === 0)
    return (
      <Flex direction="column" justify="center" align="center" className="my-80">
        <Icon id="48-cancel" width={48} height={48} />
        <Spacing size={8} />
        <p className="text-sign-tertiary">첫 댓글을 남겨보세요!</p>
      </Flex>
    );

  return (
    <ItemList
      data={comments}
      renderItem={(comment) => (
        <CommentItem
          comment={comment}
          groupId={groupId}
          articleId={articleId}
          isCaptain={isCaptain}
        />
      )}
    />
  );
}
interface CommentItemProps {
  comment: Comment;
  groupId: number;
  articleId: number;
  isCaptain: boolean;
}

function CommentItem({ comment, articleId, groupId, isCaptain }: CommentItemProps) {
  const { blockCommentIds } = useBlockStore();
  const { content, commentId, isWriter } = comment;

  const isBlocked = blockCommentIds.includes(commentId);

  const { handleMoreClick } = useMoreSheet({
    type: 'comment',
    isWriter,
    isCaptain,
    groupId,
    articleId,
    commentId,
  });

  return (
    <Flex direction="column" className="m-20 mb-20 px-4">
      <CardHeader onMoreClick={handleMoreClick} showMoreIcon={!isBlocked} {...comment} />
      <Spacing size={8} />
      <div className="break-words text-paragraph-2 text-sign-primary">
        {isBlocked ? '차단된 댓글입니다.' : content}
      </div>
    </Flex>
  );
}
