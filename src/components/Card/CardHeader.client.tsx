import { Avatar } from '../Avatar';
import { Spacing } from '../common/Spacing';
import { Flex } from '../Layout';
import MoreBottomSheet from '../Modal/MoreBottomSheet.client';
import { useDeleteArticle, useDeleteComment } from '@/apis/groups';
import WarningModal from '@/app/(main)/grouping/components/WarningModal.client';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';

import type { ReliabilityType } from '@/types';

interface CardHeaderProps {
  type: 'article' | 'comment';
  groupId: number;
  articleId: number;
  commentId?: number;
  userImageUrl: string;
  name: string;
  date: string;
  isWriterCertifiedStudent: boolean;
  isWriterCaptain: boolean;
  isWriter: boolean;
  isCaptain: boolean;
  showMoreIcon: boolean;
  writerReliabilityLevel: ReliabilityType;
  onOkDeleteClick?: (close: () => void) => void;
  onOkReportClick?: (close: () => void) => void;
  onOkBlockClick?: (close: () => void) => void;
}

export default function CardHeader({
  type,
  groupId,
  articleId,
  commentId,
  userImageUrl,
  name,
  date,
  isWriterCertifiedStudent,
  showMoreIcon,
  isWriterCaptain,
  isWriter,
  isCaptain,
  writerReliabilityLevel,
}: CardHeaderProps) {
  const { open: openBottomSheet, close: closeBottomSheet } = useModal();
  const { open: openItemModal, close: closeItemModal } = useModal();

  const { mutate: mutateDeleteArticle } = useDeleteArticle(groupId);
  const { mutate: mutateDeleteComment } = useDeleteComment(groupId, articleId);

  const content = {
    article: '게시글',
    comment: '댓글',
  }[type];

  const handleDeleteClick = () => {
    if (type === 'article') {
      mutateDeleteArticle(
        { groupId, articleId },
        {
          onSettled: () => {
            closeItemModal();
            closeBottomSheet();
          },
        }
      );
    } else {
      if (!commentId) throw new Error('commentId is undefined');
      mutateDeleteComment(
        { groupId, articleId, commentId },
        {
          onSettled: () => {
            closeItemModal();
            closeBottomSheet();
          },
        }
      );
    }
  };

  const handleReportClick = () => {
    closeItemModal();
    closeBottomSheet();
  };

  const handleBlockClick = () => {
    closeItemModal();
    closeBottomSheet();
  };

  const handleMoreClick = () => {
    openBottomSheet(
      <MoreBottomSheet onClose={closeBottomSheet}>
        <MoreBottomSheet.ListItem
          label="삭제하기"
          isShown={isWriter || isCaptain}
          onClick={() =>
            openItemModal(
              <WarningModal
                content={`해당 ${content}을 삭제하시겠습니까?`}
                onCancelClick={closeItemModal}
                onOkClick={handleDeleteClick}
              />
            )
          }
        />
        <MoreBottomSheet.ListItem
          label="신고하기"
          isShown={!isWriter}
          onClick={() =>
            openItemModal(
              <WarningModal
                content={`해당 ${content}을 신고하시겠습니까?`}
                onCancelClick={closeItemModal}
                onOkClick={handleReportClick}
              />
            )
          }
        />
        <MoreBottomSheet.ListItem
          label="차단하기"
          isShown={!isWriter}
          onClick={() =>
            openItemModal(
              <WarningModal
                content={`해당 ${content}을 차단하시겠습니까?`}
                onCancelClick={closeItemModal}
                onOkClick={handleBlockClick}
              />
            )
          }
        />
      </MoreBottomSheet>
    );
  };

  return (
    <Flex align="center" className="gap-12 pb-4 pt-6">
      <Avatar
        imageUrl={userImageUrl}
        size="small"
        iconVariant={isWriterCertifiedStudent ? 'education' : 'none'}
      />
      <div className="grow overflow-hidden">
        <Flex align="center">
          <p className="truncate text-paragraph-2 text-sign-secondary">{name}</p>
          <Spacing size={2} direction="horizontal" />
          {isWriterCaptain && <Image src="/icons/16/host.svg" alt="host" width={16} height={16} />}

          <Image
            src={`/icons/16/reliability/${writerReliabilityLevel.toLowerCase()}.svg`}
            alt="writerReliabilityLevel"
            width={16}
            height={16}
          />
        </Flex>
        <p className="text-caption text-sign-tertiary">{date}</p>
      </div>
      {showMoreIcon && (
        <Image
          src="/icons/24/more_secondary.svg"
          alt="more"
          width={24}
          height={24}
          onClick={handleMoreClick}
        />
      )}
    </Flex>
  );
}
