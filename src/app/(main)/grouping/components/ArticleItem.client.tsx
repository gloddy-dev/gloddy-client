'use client';

import { useMoreSheet } from '../hooks/useMoreSheet';
import { Button } from '@/components/Button';
import { CardHeader } from '@/components/Card';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
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
  const { content, articleId, commentCount, images, isWriter } = article;
  const { handleMoreClick } = useMoreSheet({
    type: 'article',
    isWriter,
    isCaptain,
    groupId,
    articleId,
  });
  const pathname = usePathname();

  return (
    <div className="mx-20 mb-24 mt-16 px-4">
      <CardHeader showMoreIcon={!isArticleDetailPage} onMoreClick={handleMoreClick} {...article} />
      <Spacing size={16} />
      <div className="break-words text-paragraph-1 text-sign-primary">{content}</div>
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
