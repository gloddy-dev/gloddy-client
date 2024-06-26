import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';

import { CommunityArticle, usePostCommunityArticleLike } from '@/apis/community';
import { usePostTranslateGPT } from '@/apis/openApi';
import { useTranslation } from '@/app/i18n/client';
import { cookieName } from '@/app/i18n/settings';
import { CardHeader } from '@/components/Card';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Loading } from '@/components/Loading';
import { ImageModal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import useModal from '@/hooks/useModal/useModal';
import cn from '@/utils/cn';
import { getLocalCookie } from '@/utils/cookieController';

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

  const { mutate: mutateLike } = usePostCommunityArticleLike(articleId);
  const [articleState, setArticleState] = useState({ title, content });

  const { postTranslate, isPending } = usePostTranslateGPT();
  const cookieLanguage = getLocalCookie(cookieName);

  const handleLikeClick = () => {
    mutateLike();
  };

  const handleTranslateClick = async () => {
    if (!cookieLanguage) return;

    const translatedText = await postTranslate({
      title: articleState.title,
      content: articleState.content,
      targetLang: cookieLanguage,
    });
    setArticleState({ title: translatedText.title, content: translatedText.content });
  };

  return (
    <div className="mx-20 mb-24 mt-16 px-4">
      <div className="flex items-center justify-between">
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
        <div onClick={handleTranslateClick} className="text-paragraph-2 text-sign-secondary">
          {t('detail.translate')}
        </div>
      </div>
      <Spacing size={16} />
      {isPending ? (
        <>
          <Spacing size={16} />
          <Loading />
          <Spacing size={16} />
        </>
      ) : (
        <>
          <div className={'break-words text-2xl font-semibold'}>{articleState.title}</div>
          <Spacing size={6} />
          <div className="text-paragraph-1 text-sign-primary select-auto break-words">
            {articleState.content}
          </div>
        </>
      )}
      {images.length > 0 && (
        <Flex className="h-160 my-16 gap-4 overflow-x-scroll">
          {images.map((imageUrl, index) => (
            <div
              key={imageUrl + index}
              className="h-160 w-160 relative shrink-0"
              onClick={() =>
                open(() => <ImageModal images={images} currentImage={imageUrl} onClose={exit} />)
              }
            >
              <Image
                src={imageUrl}
                alt="article_image"
                className="object-cover"
                fill
                sizes={'128px'}
              />
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
