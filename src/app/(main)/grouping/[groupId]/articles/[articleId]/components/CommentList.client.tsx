'use client';

import { type Comment, useDeleteComment, useGetComments } from '@/apis/groups';
import DeleteModal from '@/app/(main)/grouping/components/DeleteModal.client';
import { Avatar } from '@/components/Avatar';
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
          <CommentItem comment={comment} groupId={groupId} articleId={articleId} />
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
}

function CommentItem({ comment, articleId, groupId }: CommentItemProps) {
  const {
    name,
    date,
    content,
    userImageUrl,
    isWriter,
    isWriterCaptain,
    isWriterCertifiedStudent,
    writerReliabilityLevel,
    commentId,
  } = comment;

  const { open, close } = useModal();
  const { mutate: mutateDeleteComment } = useDeleteComment(groupId, articleId, commentId);

  const handleDeleteClick = () => {
    mutateDeleteComment();
    close();
  };

  return (
    <Flex direction="column" className="m-20 mb-20 px-4">
      <Flex align="center" className="gap-12 pb-4 pt-6">
        <Avatar
          imageUrl={userImageUrl ?? '/images/dummy_avatar.png'}
          size="small"
          iconVariant={isWriterCertifiedStudent ? 'education' : 'none'}
        />
        <div className="grow">
          <Flex align="center">
            <p className="text-paragraph-2 text-sign-secondary">{name}</p>
            <Spacing size={2} direction="horizontal" />
            {isWriterCaptain && (
              <Image src="/icons/16/host.svg" alt="host" width={16} height={16} />
            )}
            <Image
              src={`/icons/16/${writerReliabilityLevel.toLowerCase()}.svg`}
              alt="writerReliabilityLevel"
              width={16}
              height={16}
            />
          </Flex>
          <p className="text-caption text-sign-tertiary">{date}</p>
        </div>
        {isWriter && (
          <Image
            src="/icons/24/more_secondary.svg"
            alt="more"
            width={24}
            height={24}
            onClick={() =>
              open(
                <DeleteModal
                  content="해당 댓글을 삭제하시겠습니까?"
                  onOkClick={handleDeleteClick}
                  onCancelClick={close}
                />
              )
            }
          />
        )}
      </Flex>
      <Spacing size={8} />
      <div className="text-paragraph-2 text-sign-primary">{content}</div>
    </Flex>
  );
}
