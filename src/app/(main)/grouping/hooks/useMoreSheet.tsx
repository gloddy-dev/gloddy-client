'use client';
import BlockDoneModal from '../components/BlockDoneModal.client';
import ReportDoneModal from '../components/ReportDoneModal.client';
import WarningModal from '../components/WarningModal.client';
import { useDeleteArticle, useDeleteComment } from '@/apis/groups';
import { Spacing } from '@/components/common/Spacing';
import { Modal } from '@/components/Modal';
import MoreBottomSheet from '@/components/Modal/MoreBottomSheet.client';
import { useModal } from '@/hooks/useModal';

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
  const { open: openBottomSheet, close: closeBottomSheet } = useModal();
  const { open: openItemModal, close: closeItemModal } = useModal();
  const { open: openDoneModal, close: closeDoneModal } = useModal();

  const { mutate: mutateDeleteArticle } = useDeleteArticle(groupId);
  const { mutate: mutateDeleteComment } = useDeleteComment(groupId, articleId);

  const content = {
    article: '게시글',
    notice: '공지글',
    comment: '댓글',
  }[type];

  const handleDeleteClick = () => {
    if (type === 'article' || type === 'notice') {
      mutateDeleteArticle(
        { params: { groupId, articleId } },
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
        { params: { groupId, articleId, commentId } },
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
    openDoneModal(<ReportDoneModal onOkClick={closeDoneModal} />);
  };

  const handleBlockClick = () => {
    closeItemModal();
    closeBottomSheet();
    openDoneModal(<BlockDoneModal onOkClick={closeDoneModal} />);
  };

  const handleMoreClick = () => {
    openBottomSheet(
      <MoreBottomSheet onClose={closeBottomSheet}>
        <MoreBottomSheet.ListItem
          label="삭제하기"
          isShown={isWriter || (type === 'article' && isCaptain)}
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

  function DeleteItem() {
    const { open, close } = useModal();

    open(
      <WarningModal
        content={`해당 ${content}을 삭제하시겠습니까?`}
        onCancelClick={close}
        onOkClick={handleDeleteClick}
      />
    );
  }

  return {
    handleMoreClick,
  };
}
