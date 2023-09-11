'use client';
import BlockDoneModal from '../components/BlockDoneModal.client';
import ReportDoneModal from '../components/ReportDoneModal.client';
import WarningModal from '../components/WarningModal.client';
import { useDeleteArticle, useDeleteComment } from '@/apis/groups';
import MoreBottomSheet from '@/components/Modal/MoreBottomSheet.client';
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
  const router = useRouter();
  const { setBlockId } = useBlockStore();
  const { open: openBottomSheet, close: closeBottomSheet } = useModal();
  const { open: openItemModal, exit: exitItemModal } = useModal();
  const { open: openDoneModal, exit: exitDoneModal } = useModal();

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
            router.replace(`/grouping/${groupId}?tab=articles`);
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
            router.replace(`/grouping/${groupId}?tab=articles`);
          }
        }}
      />
    ));
  };

  const handleMoreClick = () => {
    openBottomSheet(({ isOpen }) => (
      <MoreBottomSheet onClose={closeBottomSheet} isOpen={isOpen}>
        <MoreBottomSheet.ListItem
          label="삭제하기"
          isShown={isWriter || (type === 'article' && isCaptain)}
          onClick={() =>
            openItemModal(() => (
              <WarningModal
                content={`해당 ${content}을 삭제하시겠습니까?`}
                onCancelClick={exitItemModal}
                onOkClick={handleDeleteClick}
              />
            ))
          }
        />
        <MoreBottomSheet.ListItem
          label="신고하기"
          isShown={!isWriter}
          onClick={() =>
            openItemModal(() => (
              <WarningModal
                content={`해당 ${content}을 신고하시겠습니까?`}
                onCancelClick={exitItemModal}
                onOkClick={handleReportClick}
              />
            ))
          }
        />
        <MoreBottomSheet.ListItem
          label="차단하기"
          isShown={!isWriter}
          onClick={() =>
            openItemModal(() => (
              <WarningModal
                content={`해당 ${content}을 차단하시겠습니까?`}
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
