import { CommunityArticle, usePostCommunityArticleLike } from '@/apis/community';
import { useTranslation } from '@/app/i18n/client';
import { CardHeader } from '@/components/Card';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { ImageModal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { useModal } from '@/hooks/useModal';
import cn from '@/utils/cn';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';

interface ArticleItemProps {
  article: CommunityArticle;
}

export default function ArticleItem({ article }: ArticleItemProps) {
  const { t } = useTranslation('community');
  const { open, exit } = useModal();

  const {
    title,
    content,
    images,
    category,
    id: articleId,
    userId,
    thumbnail,
    isLiked,
    createdAt,
    isWriter,
    likeCount,
    commentCount,
  } = article.article;

  const {
    nickName,
    countryName,
    id: writerId,
    countryImage,
    profileImage,
    isCertifiedStudent,
    reliabilityLevel,
  } = article.writer;

  const { mutate: mutateLike } = usePostCommunityArticleLike(articleId, category.id);

  const handleLikeClick = () => {
    mutateLike();
  };

  return (
    <div className="mx-20 mb-24 mt-16 px-4">
      <CardHeader
        showMoreIcon={false}
        name={nickName}
        userId={writerId}
        userImageUrl={profileImage}
        isWriterCertifiedStudent={isCertifiedStudent}
        writerReliabilityLevel={reliabilityLevel}
        isWriterCaptain={true}
        date={format(parseISO(createdAt), 'yyyy.MM.dd HH:mm')}
        countryImage={countryImage}
      />
      <Spacing size={16} />
      <div className={'text-2xl font-semibold'}>{title}</div>
      <Spacing size={6} />
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
      <Spacing size={6} />
      <Flex align="center" className="gap-4" onClick={handleLikeClick}>
        <Icon
          id="16-favorite_fill"
          className={cn(isLiked ? 'text-warning' : 'text-sign-caption')}
          width={27}
          height={27}
        />
        <p className={cn(isLiked ? 'text-warning' : 'text-sign-caption') + ' text-subtitle-3'}>
          {likeCount.toString().padStart(2, '0') + t('detail.likeCount')}
        </p>
      </Flex>
    </div>
  );
}
