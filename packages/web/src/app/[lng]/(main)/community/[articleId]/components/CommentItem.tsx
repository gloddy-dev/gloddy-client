import { format, parseISO } from 'date-fns';
import { useState } from 'react';

import { useCommentContext } from './CommentProvider';
import CommunityModal from './CommunityModal';
import ReplyList from './ReplyList';

import {
  Comment,
  useDeleteCommunityComment,
  useGetCommunityArticleDetail,
  useGetCommunityReply,
  usePostCommunityCommentLike,
} from '@/apis/community';
import { usePostTranslateGPT } from '@/apis/openApi';
import { useTranslation } from '@/app/i18n/client';
import { cookieName } from '@/app/i18n/settings';
import { IconButton } from '@/components/Button';
import { CardHeader } from '@/components/Card';
import { DropDown } from '@/components/DropDown';
import { DropDownOptionType } from '@/components/DropDown/DropDown';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Loading } from '@/components/Loading';
import { Spacing } from '@/components/Spacing';
import { useModal } from '@/hooks/useModal';
import { useBlockStore } from '@/store/useBlockStore';
import cn from '@/utils/cn';
import { getLocalCookie } from '@/utils/cookieController';

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
  const categoryId = useGetCommunityArticleDetail(articleId).data.data.article.category.id;
  const { setBlockId } = useBlockStore();
  const { open: openModal, exit: closeModal } = useModal();
  const { mutate: mutateLike } = usePostCommunityCommentLike(articleId, commentId);
  const { mutate: mutateDelete } = useDeleteCommunityComment(articleId, commentId, categoryId);
  const { data: replyDataList } = useGetCommunityReply(articleId, commentId);
  const { setCommentType, setCommentId } = useCommentContext();

  const [commentState, setCommentState] = useState(content);
  const { postTranslate, isPending } = usePostTranslateGPT();
  const cookieLanguage = getLocalCookie(cookieName);

  const handleBlockComment = () => {
    openModal(() => (
      <CommunityModal
        onOkClick={() => {
          setBlockId(commentId, 'communityComment');
          closeModal();
        }}
        onCancelClick={closeModal}
        variant="warning"
        message={t('comment.block.content')}
      />
    ));
  };

  const options: DropDownOptionType[] = [
    {
      name: t('comment.block.label'),
      onClick: handleBlockComment,
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

  const handleTranslateClick = async () => {
    if (!cookieLanguage) return;

    const translatedText = await postTranslate({
      content: commentState,
      targetLang: cookieLanguage,
    });
    setCommentState(translatedText.content);
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
          countryImage={countryImage}
        >
          <div onClick={handleTranslateClick} className="text-paragraph-2 text-sign-secondary">
            {t('detail.translate')}
          </div>
          <DropDown options={options}>
            <IconButton size="large">
              <Icon id="24-more_secondary" />
            </IconButton>
          </DropDown>
        </CardHeader>
        <Spacing size={10} />
        {isPending ? (
          <>
            <Spacing size={16} />
            <Loading />
            <Spacing size={16} />
          </>
        ) : (
          <div className="text-paragraph-2 text-sign-primary select-auto break-words">
            {commentState}
          </div>
        )}
        <Flex align="center" className="gap-8">
          <Flex align="center" className="gap-4" onClick={handleLikeClick}>
            <Icon
              id="16-favorite_fill"
              className={cn(isLiked ? 'text-warning' : 'text-sign-caption')}
              width={16}
              height={16}
            />
            <p className={cn(isLiked ? 'text-warning' : 'text-sign-caption', 'text-subtitle-3')}>
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
      <Flex direction="column">
        <ReplyList replyList={replyDataList.data.childComments} articleWriterId={articleWriterId} />
      </Flex>
    </>
  );
}
