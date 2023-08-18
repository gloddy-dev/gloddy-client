'use client';
import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { Modal } from '@/components/Modal';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import type { Article } from '@/apis/groups/type';

interface ArticleItemProps {
  article: Article;
  isCaptain: boolean;
  isBoardDetail?: boolean;
}

export default function ArticleItem({
  article,
  isCaptain,
  isBoardDetail = false,
}: ArticleItemProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const pathname = usePathname();

  const {
    userImageUrl,
    name,
    date,
    content,
    articleId,
    commentCount,
    images,
    isCertifiedStudent,
    isCaptain: isArticleCaptain,
  } = article;

  const handleOkClick = () => {};

  return (
    <>
      <div className="px-20 pb-24 pt-16">
        <div className="px-4">
          <Flex align="center" className="gap-12 pb-4 pt-6">
            <Avatar
              imageUrl={userImageUrl ?? '/images/dummy_avatar.png'}
              size="small"
              isCertified={isCertifiedStudent}
            />
            <div className="grow">
              <Flex align="center">
                <p className="text-paragraph-2 text-sign-secondary">{name}</p>
                <Spacing size={2} direction="horizontal" />
                {isArticleCaptain && (
                  <Image src="/icons/16/host.svg" alt="host" width={16} height={16} />
                )}
                {/* TODO: 등급 아이콘 추가 */}
              </Flex>
              <p className="text-caption text-sign-tertiary">{date}</p>
            </div>
            {/* TODO: 내 게시글 여부 api 추가 시 변경 */}
            {isCaptain && (
              <Image
                src="/icons/24/more_secondary.svg"
                alt="more"
                width={24}
                height={24}
                onClick={() => setIsDeleteModalOpen(true)}
              />
            )}
          </Flex>
          <Spacing size={16} />
          <div className="text-paragraph-2 text-sign-primary">{content}</div>
          {images.length > 0 && (
            <>
              <Spacing size={16} />
              <Flex className="h-160 gap-4 overflow-x-scroll">
                {images.map((imageUrl, index) => (
                  <div key={imageUrl + index} className="relative h-160 w-160 shrink-0">
                    <Image src={imageUrl} alt="article_image" className="object-cover" fill />
                  </div>
                ))}
              </Flex>
              <Spacing size={16} />
            </>
          )}
          {isBoardDetail && (
            <>
              <Spacing size={16} />
              <Button
                variant="solid-secondary"
                as="a"
                href={`
                ${pathname}/board/${articleId}
              `}
              >
                댓글 {commentCount}개
              </Button>
              <Spacing size={24} />
            </>
          )}
        </div>
      </div>
      <Modal
        variant="warning"
        isOpen={isDeleteModalOpen}
        onCancelClick={() => setIsDeleteModalOpen(false)}
        onOkClick={handleOkClick}
      >
        <Spacing size={32} />
        <Image src="/icons/48/warning.svg" alt="warning" width={48} height={48} />
        <Spacing size={12} />
        <p>해당 게시글을 삭제하시겠습니까?</p>
        <Spacing size={16} />
      </Modal>
    </>
  );
}
