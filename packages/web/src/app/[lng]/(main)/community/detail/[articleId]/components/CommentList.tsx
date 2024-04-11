'use client';
import CommentItem from './CommentItem';

import { Comment } from '@/apis/community/type';
import { useTranslation } from '@/app/i18n/client';
import { Empty } from '@/components/Empty';
import { ItemList } from '@/components/List';
import { Spacing } from '@/components/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useBlockStore } from '@/store/useBlockStore';

interface CommentListProps {
  commentList: Comment[];
  articleWriterId: number;
}

export default function CommentList({ commentList, articleWriterId }: CommentListProps) {
  const { t } = useTranslation('community');
  const { articleId } = useNumberParams<['articleId']>();
  const { blockCommunityCommentIds } = useBlockStore();

  return (
    <>
      <ItemList
        data={commentList}
        renderItem={(comment: Comment) => {
          return (
            !blockCommunityCommentIds.includes(comment.comment.id) && (
              <CommentItem
                comment={comment}
                articleId={articleId}
                articleWriterId={articleWriterId}
                isCaptain={true}
              />
            )
          );
        }}
        renderEmpty={() => <Empty message={t('comment.firstComment')} />}
      />
      <Spacing size={102} />
    </>
  );
}
