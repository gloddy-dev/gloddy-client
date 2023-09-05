import WarningModal from '../../../components/WarningModal.client';
import { type Notice, useDeleteArticle } from '@/apis/groups';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { useModal } from '@/hooks/useModal';
import { useRouter } from 'next/navigation';

interface NoticeItemProps {
  notice: Notice;
  groupId: number;
  isCaptain: boolean;
}

export default function NoticeItem({ notice, groupId, isCaptain }: NoticeItemProps) {
  const { content, noticeId } = notice;
  const router = useRouter();
  const { open, exit } = useModal();
  const { mutate: mutateDeleteArticle } = useDeleteArticle(groupId);

  const handleDeleteClick = () => {
    mutateDeleteArticle(
      {
        params: {
          articleId: noticeId,
          groupId,
        },
      },
      {
        onSettled: exit,
      }
    );
  };

  return (
    <Flex align="center" className="gap-12 py-4">
      <Flex align="center" className="gap-4 overflow-hidden">
        <Icon id="24-announcement" />
        <p className="truncate">{content}</p>
        {isCaptain && (
          <Icon
            id="24-delete"
            onClick={() => {
              open(() => (
                <WarningModal
                  onCancelClick={exit}
                  onOkClick={handleDeleteClick}
                  content="해당 공지글을 삭제하시겠습니까?"
                />
              ));
            }}
          />
        )}
      </Flex>
      <Icon
        id="24-navigate_next"
        onClick={() => router.push(`/grouping/${groupId}/articles/${noticeId}`)}
      />
    </Flex>
  );
}
