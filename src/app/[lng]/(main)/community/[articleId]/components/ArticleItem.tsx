import Image from 'next/image';

import { CommunityArticle } from '@/apis/groups';
import { CardHeader } from '@/components/Card';
import { Flex } from '@/components/Layout';
import { ImageModal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { useModal } from '@/hooks/useModal';

interface ArticleItemProps {
  article: CommunityArticle;
}

export default function ArticleItem({ article }: ArticleItemProps) {
  const { open, exit } = useModal();
  const { title, content, articleId, commentCount, images, isWriter } = article;

  return (
    <div className="mx-20 mb-24 mt-16 px-4">
      <CardHeader showMoreIcon={false} {...article} />
      <Spacing size={16} />
      <div className={'text-2xl font-semibold'}>{title}</div>
      <Spacing size={4} />
      <div className="break-words text-paragraph-1 text-sign-primary">{content}</div>
      {images.length > 0 && (
        <Flex className="my-16 h-160 gap-4 overflow-x-scroll">
          {images.map((imageUrl, index) => (
            <div
              key={imageUrl + index}
              className="relative h-160 w-160 shrink-0"
              onClick={() =>
                open(() => <ImageModal images={images} currentImage={imageUrl} onClose={exit} />)
              }
            >
              <Image src={imageUrl} alt="article_image" className="object-cover" fill />
            </div>
          ))}
        </Flex>
      )}
    </div>
  );
}
