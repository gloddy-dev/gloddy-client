import { format, parseISO } from 'date-fns';

import {
  Comment,
  useDeleteCommunityComment,
  useGetCommunityReply,
  usePostCommunityCommentLike,
} from '@/apis/community';
import { useComment } from '@/app/[lng]/(main)/community/[articleId]/components/CommentSection';
import ReplyList from '@/app/[lng]/(main)/community/[articleId]/components/ReplyList';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { CardHeader } from '@/components/Card';
import { DropDown } from '@/components/DropDown';
import { DropDownOptionType } from '@/components/DropDown/DropDown';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import cn from '@/utils/cn';

interface CommentItemProps {
  comment: Comment;
  articleId: number;
  isCaptain: boolean;
  articleWriterId: number;
}

export default function CommentItem({
  comment,
  articleId,
  isCaptain,
  articleWriterId,
}: CommentItemProps) {
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
  const { mutate: mutateDelete } = useDeleteCommunityComment(articleId, commentId);
  const { data: replyDataList } = useGetCommunityReply(articleId, commentId);
  const { setCommentType, setCommentId } = useComment();

  const handleBlockArticle = () => {
    console.log('block');
  };

  const options: DropDownOptionType[] = [
    {
      name: t('comment.block.label'),
      onClick: handleBlockArticle,
    },
    ...(isWriter
      ? [
          {
            name: t('comment.delete.label'),
            onClick: () => mutateDelete(),
          },
        ]
      : []),
  ];

  const handleLikeClick = () => {
    mutateLike();
  };

  const handleReplyClick = () => {
    setCommentType('reply');
    setCommentId(commentId);
  };

  return (
    <>
      <Flex direction="column" className="m-20 mb-20 px-4">
        <CardHeader
          date={format(parseISO(createdAt), 'yyyy.MM.dd HH:mm')}
          isWriterCertifiedStudent={isCertifiedStudent}
          writerReliabilityLevel={reliabilityLevel}
          userImageUrl={profileImage}
          userId={userId}
          name={nickName}
          isWriterCaptain={articleWriterId === userId}
        >
          <DropDown options={options}>
            <IconButton size="large">
              <Icon id="24-more_secondary" />
            </IconButton>
          </DropDown>
        </CardHeader>
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
          <Flex align="center" className="gap-4" onClick={handleReplyClick}>
            <Icon id="16-comment_fill" width={16} height={16} />
            <p className="text-caption text-sign-brand">
              {commentCount.toString().padStart(2, '0')}
            </p>
          </Flex>
        </Flex>
      </Flex>
      <ReplyList replyList={replyDataList.data.childComments} articleWriterId={articleWriterId} />
    </>
  );
}
