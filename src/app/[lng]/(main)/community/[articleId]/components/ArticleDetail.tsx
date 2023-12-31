import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { CommunityArticle } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { CardHeader } from '@/components/Card';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { ImageModal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { useModal } from '@/hooks/useModal';

interface DetailContentProps {
  articleData: CommunityArticle;
}

export default function ArticleDetail({ articleData }: DetailContentProps) {
  const { title, likeCount, articleId, content, images, commentCount } = articleData;
  const { t } = useTranslation('community');
  const { open, exit } = useModal();

  const pathname = usePathname();

  return (
    <div className="mx-20 mb-24 mt-16 px-4">
      <CardHeader showMoreIcon={false} {...articleData} />
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
      <Flex align="center" className="gap-4">
        <Icon id="16-favorite_fill" width={27} height={27} />
        <p className=" text-warning">{likeCount.toString().padStart(2, '0')}</p>
      </Flex>
    </div>
  );
}
