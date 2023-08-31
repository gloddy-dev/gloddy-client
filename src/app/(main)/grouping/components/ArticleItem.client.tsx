'use client';
import ArticleItemModal from './DeleteModal.client';
import { useDeleteArticle } from '@/apis/groups';
import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import type { Article } from '@/apis/groups/type';

interface ArticleItemProps {
  article: Article;
  isCaptain: boolean;
  groupId: number;
  isArticleDetailPage?: boolean;
}

export default function ArticleItem({
  article,
  isCaptain,
  groupId,
  isArticleDetailPage = false,
}: ArticleItemProps) {
  const {
    userImageUrl,
    name,
    date,
    content,
    articleId,
    commentCount,
    images,
    isWriter,
    isWriterCaptain,
    isWriterCertifiedStudent,
    writerReliabilityLevel,
  } = article;

  const pathname = usePathname();
  const { open, close } = useModal();
  const { mutate: mutateDeleteArticle } = useDeleteArticle(groupId, articleId);

  const handleDeleteClick = () => {
    mutateDeleteArticle();
    close();
  };

  return (
    <div className="mx-20 mb-24 mt-16 px-4">
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
        {/* TODO: 내 게시글 여부 api 추가 시 변경 */}
        {(isWriter || isCaptain) && !isArticleDetailPage && (
          <Image
            src="/icons/24/more_secondary.svg"
            alt="more"
            width={24}
            height={24}
            onClick={() =>
              open(
                <ArticleItemModal
                  content="해당 게시글을 삭제하시겠습니까?"
                  onOkClick={handleDeleteClick}
                  onCancelClick={close}
                />
              )
            }
          />
        )}
      </Flex>
      <Spacing size={16} />
      <div className="text-paragraph-2 text-sign-primary">{content}</div>
      {images.length > 0 && (
        <Flex className="my-16 h-160 gap-4 overflow-x-scroll">
          {images.map((imageUrl, index) => (
            <div key={imageUrl + index} className="relative h-160 w-160 shrink-0">
              <Image src={imageUrl} alt="article_image" className="object-cover" fill />
            </div>
          ))}
        </Flex>
      )}
      {!isArticleDetailPage && (
        <>
          <Spacing size={16} />
          <Button
            variant="solid-secondary"
            as="a"
            href={`
                ${pathname}/articles/${articleId}
              `}
          >
            댓글 {commentCount}개
          </Button>
          <Spacing size={24} />
        </>
      )}
    </div>
  );
}
