import { Article } from '@/apis/groups';
import { Button } from '@/components/Button';
import { CardHeader } from '@/components/Card';
import { Flex } from '@/components/Layout';
import { ImageModal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface ArticleItemProps {
  article: Article;
}

export default function ArticleItem({ article }: ArticleItemProps) {
  const { open, exit } = useModal();
  const { t } = useTranslation('groupDetail');
  const { content, images, articleId, commentCount } = article;

  return (
    <div className="mx-20 mb-24 mt-16 px-4">
      <CardHeader showMoreIcon onMoreClick={() => {}} {...article} />
      <Spacing size={16} />
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
      <Spacing size={16} />
      <Button variant="solid-secondary" as="a" href={`community/${articleId}`}>
        {t('board.commentCount', { commentCount })}
      </Button>
      <Spacing size={24} />
    </div>
  );
}
