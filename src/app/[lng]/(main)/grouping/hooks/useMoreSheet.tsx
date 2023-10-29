'use client';
import BlockDoneModal from '../components/BlockDoneModal.client';
import ReportDoneModal from '../components/ReportDoneModal.client';
import WarningModal from '../components/WarningModal.client';
import { useDeleteArticle, useDeleteComment } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import MoreBottomSheet from '@/components/Modal/MoreBottomSheet.client';
import useAppRouter from '@/hooks/useAppRouter';
import { useModal } from '@/hooks/useModal';
import { useBlockStore } from '@/store/useBlockStore';
import { useRouter } from 'next/navigation';

type CommentId<T> = T extends 'comment' ? { commentId: number } : { commentId?: never };

interface MoreSheetProps<T extends 'article' | 'comment' | 'notice'> {
  type: T;
  isWriter: boolean;
  isCaptain: boolean;
  groupId: number;
  articleId: number;
}

export function useMoreSheet<T extends 'article' | 'comment' | 'notice'>({
  type,
  isWriter,
  isCaptain,
  groupId,
  articleId,
  commentId,
}: MoreSheetProps<T> & CommentId<T>) {
  const { t } = useTranslation('groupDetail');
  const { replace } = useAppRouter();
  const { setBlockId } = useBlockStore();
  const { open: openBottomSheet, close: closeBottomSheet } = useModal();
  const { open: openItemModal, exit: exitItemModal } = useModal();
  const { open: openDoneModal, exit: exitDoneModal } = useModal();

  const { mutate: mutateDeleteArticle } = useDeleteArticle(groupId);
  const { mutate: mutateDeleteComment } = useDeleteComment(groupId, articleId);

  const handleDeleteClick = () => {
    if (type === 'article' || type === 'notice') {
      mutateDeleteArticle(
        { params: { groupId, articleId } },
        {
          onSettled: () => {
            exitItemModal();
            closeBottomSheet();
          },
        }
      );
    } else {
      if (!commentId) throw new Error('commentId is undefined');
      mutateDeleteComment(
        { params: { groupId, articleId, commentId } },
        {
          onSettled: () => {
            exitItemModal();
            closeBottomSheet();
          },
        }
      );
    }
  };

  const handleReportClick = () => {
    const blockId = type === 'comment' ? commentId! : articleId;

    exitItemModal();
    closeBottomSheet();
    openDoneModal(() => (
      <ReportDoneModal
        onOkClick={() => {
          setBlockId(blockId, type);
          exitDoneModal();
          if (type !== 'comment') {
            replace(`/grouping/${groupId}?tab=articles`);
          }
        }}
      />
    ));
  };

  const handleBlockClick = () => {
    const blockId = type === 'comment' ? commentId! : articleId;

    exitItemModal();
    closeBottomSheet();
    openDoneModal(() => (
      <BlockDoneModal
        onOkClick={() => {
          setBlockId(blockId, type);
          exitDoneModal();
          if (type !== 'comment') {
            replace(`/grouping/${groupId}?tab=articles`);
          }
        }}
      />
    ));
  };

  const handleMoreClick = () => {
    openBottomSheet(({ isOpen }) => (
      <MoreBottomSheet onClose={closeBottomSheet} isOpen={isOpen}>
        <MoreBottomSheet.ListItem
          label={t(`${type}.delete.label`)}
          isShown={isWriter || (type === 'article' && isCaptain)}
          onClick={() =>
            openItemModal(() => (
              <WarningModal
                content={t(`${type}.delete.content`)}
                onCancelClick={exitItemModal}
                onOkClick={handleDeleteClick}
              />
            ))
          }
        />
        <MoreBottomSheet.ListItem
          label={t(`${type}.report.label`)}
          isShown={!isWriter}
          onClick={() =>
            openItemModal(() => (
              <WarningModal
                content={t(`${type}.report.content`)}
                onCancelClick={exitItemModal}
                onOkClick={handleReportClick}
              />
            ))
          }
        />
        <MoreBottomSheet.ListItem
          label={t(`${type}.block.label`)}
          isShown={!isWriter}
          onClick={() =>
            openItemModal(() => (
              <WarningModal
                content={t(`${type}.block.content`)}
                onCancelClick={exitItemModal}
                onOkClick={handleBlockClick}
              />
            ))
          }
        />
      </MoreBottomSheet>
    ));
  };

  return {
    handleMoreClick,
  };
}
