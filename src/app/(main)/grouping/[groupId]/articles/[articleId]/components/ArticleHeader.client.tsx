'use client';
import { useDeleteArticle, useGetArticle, useGetGroupDetail } from '@/apis/groups';
import WarningModal from '@/app/(main)/grouping/components/WarningModal.client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ArticleHeader() {
  const { groupId, articleId } = useNumberParams<['groupId', 'articleId']>();
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { data: articleData } = useGetArticle(groupId, articleId);
  const { mutate: mutateDeleteArticle } = useDeleteArticle(groupId);
  const router = useRouter();

  const { open, close } = useModal();

  const { isCaptain } = groupDetailData;
  const { isWriter, notice } = articleData;

  const handleMoreClick = () => {
    open(
      <WarningModal
        onCancelClick={close}
        onOkClick={() =>
          mutateDeleteArticle(
            {
              articleId,
              groupId,
            },
            {
              onSettled: close,
            }
          )
        }
        content={`해당 ${notice ? '공지글' : '게시글'}을 삭제하시겠습니까?`}
      />
    );
  };

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={() => router.back()}>
          <Image src="/icons/24/arrow_back.svg" alt="back" width={24} height={24} />
        </IconButton>
        <p>게시글</p>
      </Header.Left>
      {(isWriter || isCaptain) && (
        <Header.Right>
          <IconButton size="large" onClick={handleMoreClick}>
            <Image src="/icons/24/more.svg" alt="more" width={24} height={24} />
          </IconButton>
        </Header.Right>
      )}
    </Header>
  );
}
