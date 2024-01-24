'use client';
import { usePostCommunityCommentLike } from '@/apis/community';
import { Comment } from '@/apis/community/type';
import CardHeader from '@/app/[lng]/(main)/community/[articleId]/components/CardHeader';
import { useTranslation } from '@/app/i18n/client';
import { DropDownOptionType } from '@/components/DropDown/DropDown';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { ItemList } from '@/components/List';
import { Spacing } from '@/components/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';
import cn from '@/utils/cn';

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
  const { t } = useTranslation('community');
  const {
    content,
    id: commentId,
    isWriter,
    createdAt,
    isLiked,
    likeCount,
    commentCount,
  } = comment.comment;
  const {
    isCertifiedStudent,
    reliabilityLevel,
    countryName,
    id: userId,
    countryImage,
    profileImage,
    nickName,
  } = comment.writer;
  const { mutate: mutateLike } = usePostCommunityCommentLike(articleId, commentId);

  const handleBlockArticle = () => {
    console.log('block');
  };

  const handleDeleteArticle = () => {
    console.log('block');
  };

  const options: DropDownOptionType[] = [
    {
      name: t('comment.block.label'),
      onClick: handleBlockArticle,
    },
    {
      name: t('comment.delete.label'),
      onClick: handleBlockArticle,
    },
  ];

  const handleLikeClick = () => {
    mutateLike();
  };

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
        showMoreIcon={true}
        options={options}
      />
      <Spacing size={10} />
      <div className="break-words text-paragraph-2 text-sign-primary">{content}</div>
      <Flex align="center" className="gap-8">
        <Flex align="center" className="gap-4" onClick={handleLikeClick}>
          <Icon
            id="16-favorite_fill"
            className={cn(isLiked ? 'text-warning' : 'text-sign-caption')}
            width={16}
            height={16}
          />
          <p className={cn(isLiked ? 'text-warning' : 'text-sign-caption') + ' text-subtitle-3'}>
            {likeCount.toString().padStart(2, '0')}
          </p>
        </Flex>
        <Flex align="center" className="gap-4">
          <Icon id="16-comment_fill" width={16} height={16} />
          <p className="text-caption text-sign-brand">{commentCount.toString().padStart(2, '0')}</p>
        </Flex>
      </Flex>
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
