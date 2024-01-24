'use client';
import { Comment } from '@/apis/community/type';
import { useTranslation } from '@/app/i18n/client';
import { CardHeader } from '@/components/Card';
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

interface CommentItemProps {
  comment: Comment;
  articleId: number;
  isCaptain: boolean;
  articleWriterId: number;
}

function CommentItem({ comment, articleId, isCaptain, articleWriterId }: CommentItemProps) {
  const { content, id: commentId, isWriter, createdAt } = comment.comment;
  const {
    isCertifiedStudent,
    reliabilityLevel,
    countryName,
    id: userId,
    countryImage,
    profileImage,
    nickName,
  } = comment.writer;

  return (
    <Flex direction="column" className="m-20 mb-20 px-4">
      <CardHeader
        date={createdAt}
        isWriterCertifiedStudent={isCertifiedStudent}
        writerReliabilityLevel={reliabilityLevel}
        userImageUrl={profileImage}
        userId={userId}
        name={nickName}
        isWriterCaptain={articleWriterId === userId}
      />
      <Spacing size={10} />
      <div className="break-words text-paragraph-2 text-sign-primary">{content}</div>
    </Flex>
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
