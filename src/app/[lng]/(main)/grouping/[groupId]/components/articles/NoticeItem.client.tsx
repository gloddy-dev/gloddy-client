import WarningModal from '../../../components/WarningModal.client';
import { type Notice, useDeleteArticle } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import useAppRouter from '@/hooks/useAppRouter';
import { useModal } from '@/hooks/useModal';

interface NoticeItemProps {
  notice: Notice;
  groupId: number;
  isCaptain: boolean;
}

export default function NoticeItem({ notice, groupId, isCaptain }: NoticeItemProps) {
  const { t } = useTranslation('groupDetail');
  const { content, noticeId } = notice;
  const { push } = useAppRouter();
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
        <Icon id="24-announcement" className="shrink-0" />
        <p className="truncate">{content}</p>
        {isCaptain && (
          <Icon
            id="24-delete"
            onClick={() => {
              open(() => (
                <WarningModal
                  onCancelClick={exit}
                  onOkClick={handleDeleteClick}
                  content={t('notice.delete.content')}
                />
              ));
            }}
          />
        )}
      </Flex>
      <Icon
        id="24-navigate_next"
        className="shrink-0"
        onClick={() => push(`/grouping/${groupId}/articles/${noticeId}`)}
      />
    </Flex>
  );
}
