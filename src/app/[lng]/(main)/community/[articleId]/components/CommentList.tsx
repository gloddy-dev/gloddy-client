'use client';
import CommentItem from './CommentItem';
import { Comment } from '@/apis/community/type';
import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { ItemList } from '@/components/List';
import { Spacing } from '@/components/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';

interface CommentListProps {
  commentList: Comment[];
  articleWriterId: number;
}

export default function CommentList({ commentList, articleWriterId }: CommentListProps) {
  const { articleId } = useNumberParams<['articleId']>();

  return (
    <ItemList
      data={commentList}
      renderItem={(comment: Comment) => (
        <CommentItem
          comment={comment}
          articleId={articleId}
          articleWriterId={articleWriterId}
          isCaptain={true}
        />
      )}
      renderEmpty={() => <EmptyComment />}
      className={'pb-102'}
    />
  );
}

function EmptyComment() {
  const { t } = useTranslation('community');

  return (
    <Flex direction="column" justify="center" align="center" className="my-80">
      <Icon id="48-cancel" width={48} height={48} />
      <Spacing size={8} />
      <p className="text-sign-tertiary">{t('comment.firstComment')}</p>
    </Flex>
  );
}
