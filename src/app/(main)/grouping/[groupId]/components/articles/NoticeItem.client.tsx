import WarningModal from '../../../components/WarningModal.client';
import { type Notice, useDeleteArticle } from '@/apis/groups';
import { Flex } from '@/components/Layout';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface NoticeItemProps {
  notice: Notice;
  groupId: number;
  isCaptain: boolean;
}

export default function NoticeItem({ notice, groupId, isCaptain }: NoticeItemProps) {
  const { content, noticeId } = notice;
  const router = useRouter();
  const { open, close } = useModal();
  const { mutate: mutateDeleteArticle } = useDeleteArticle(groupId);

  const handleDeleteClick = () => {
    mutateDeleteArticle(
      {
        articleId: noticeId,
        groupId,
      },
      {
        onSettled: close,
      }
    );
  };

  return (
    <Flex align="center" className="gap-12 py-4">
      <Flex align="center" className="gap-4 overflow-hidden">
        <Image src="/icons/24/announcement.svg" alt="announcement" width={24} height={24} />
        <p className="truncate">{content}</p>
        {isCaptain && (
          <Image
            src="/icons/24/delete.svg"
            alt="delete"
            width={24}
            height={24}
            onClick={() => {
              open(
                <WarningModal
                  onCancelClick={close}
                  onOkClick={handleDeleteClick}
                  content="해당 공지글을 삭제하시겠습니까?"
                />
              );
            }}
          />
        )}
      </Flex>
      <Image
        src="/icons/24/navigate_next.svg"
        alt="navigate_next"
        width={24}
        height={24}
        onClick={() => router.push(`/grouping/${groupId}/articles/${noticeId}`)}
      />
    </Flex>
  );
}
