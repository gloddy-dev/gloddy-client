'use client';

import { type Comment, useGetComments, useGetGroupDetail } from '@/apis/groups';
import { useMoreSheet } from '@/app/[lng]/(main)/grouping/hooks/useMoreSheet';
import { useTranslation } from '@/app/i18n/client';
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
      renderEmpty={() => <EmptyComment />}
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
  const { t } = useTranslation('groupDetail');
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
        {isBlocked ? t('comment.blockComment') : content}
      </div>
    </Flex>
  );
}

function EmptyComment() {
  const { t } = useTranslation('groupDetail');

  return (
    <Flex direction="column" justify="center" align="center" className="my-80">
      <Icon id="48-cancel" width={48} height={48} />
      <Spacing size={8} />
      <p className="text-sign-tertiary">{t('comment.firstComment')}</p>
    </Flex>
  );
}
