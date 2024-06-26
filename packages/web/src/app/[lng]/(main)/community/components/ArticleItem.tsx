'use client';

import { ko } from 'date-fns/locale';
import Image from 'next/image';

import { CommunityArticle } from '@/apis/community';
import ArticleBadge from '@/app/[lng]/(main)/community/components/ArticleBadge';
import { useTranslation } from '@/app/i18n/client';
import { Avatar } from '@/components/Avatar';
import { Divider } from '@/components/Divider';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import useAppRouter from '@/hooks/useAppRouter';
import cn from '@/utils/cn';
import { formatDate } from '@/utils/formatDate';

interface ArticleItemProps {
  articleData: CommunityArticle;
  onClick?: () => void;
}

export default function ArticleItem({ articleData, onClick }: ArticleItemProps) {
  const { t } = useTranslation('community');
  const { push } = useAppRouter();
  const { article, writer } = articleData;

  const {
    id: articleId,
    title,
    content,
    images,
    commentCount,
    likeCount,
    isLiked,
    createdAt,
    category,
  } = article;

  const { isCertifiedStudent, reliabilityLevel, nickName, countryImage, profileImage } = writer;

  return (
    <div
      className="p-20"
      onClick={onClick || (() => push(`/community/detail/${articleId}`, false))}
    >
      <Flex justify="between" align="center">
        <ArticleBadge type={category.name}>{t(`category.${category.name}`)}</ArticleBadge>
        <p className="text-caption text-sign-tertiary">{formatDate(createdAt, ko)}</p>
      </Flex>
      <Spacing size={12} />
      <Flex justify="between" className="gap-6">
        <div className={'w-full'}>
          <p className="text-subtitle-1 line-clamp-1 break-words">{title}</p>
          <Spacing size={4} />
          <p className="text-paragraph-2 line-clamp-2 whitespace-pre-wrap break-words">{content}</p>
        </div>
        {!!images?.length && (
          <div className="rounded-8 relative h-80 w-80 shrink-0 overflow-hidden">
            <Image src={images[0]} alt="이미지" sizes={'90px'} fill className="object-cover" />
          </div>
        )}
      </Flex>
      <Divider className="my-12" />
      <Flex justify="between" align="center">
        <Flex align="center" className="gap-6">
          <Avatar
            imageUrl={profileImage}
            size="x-small"
            iconVariant={isCertifiedStudent ? 'education' : 'none'}
            countryImage={countryImage}
          />
          <p className="text-paragraph-2">{nickName}</p>
          <Icon id={`16-reliability-${reliabilityLevel.toLowerCase()}`} width={16} height={16} />
        </Flex>
        <Flex align="center" className="gap-8">
          <Flex align="center" className="gap-4">
            <Icon
              id="16-favorite_fill"
              width={16}
              height={16}
              className={cn(isLiked ? 'text-warning' : 'text-sign-caption')}
            />
            <p className={cn(isLiked ? 'text-warning' : 'text-sign-caption') + ' text-subtitle-3'}>
              {likeCount.toString().padStart(2, '0')}
            </p>
          </Flex>
          <Flex align="center" className="gap-4">
            <Icon id="16-comment_fill" width={16} height={16} />
            <p className="text-caption text-sign-brand">
              {commentCount.toString().padStart(2, '0')}
            </p>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
