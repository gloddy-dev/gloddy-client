'use client';

import { formatDistanceStrict } from 'date-fns';
import { enUS, ko } from 'date-fns/locale';
import Image from 'next/image';

import { CommunityArticle } from '@/apis/community';
import ArticleBadge from '@/app/[lng]/(main)/community/components/ArticleBadge.client';
import { useTranslation } from '@/app/i18n/client';
import { Avatar } from '@/components/Avatar';
import { Divider } from '@/components/Divider';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import useAppRouter from '@/hooks/useAppRouter';
import { currentKoreaTime } from '@/utils/date';

interface ArticleItemProps {
  articleData: CommunityArticle;
  onClick?: () => void;
}

export default function ArticleItem({ articleData, onClick }: ArticleItemProps) {
  const { t, i18n } = useTranslation('community');
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
    isWriter,
    userId,
    thumbnail,
    category,
  } = article;

  const {
    id: writerId,
    isCertifiedStudent,
    reliabilityLevel,
    nickName,
    countryName,
    countryImage,
    profileImage,
  } = writer;

  const locale = i18n.language === 'ko' ? ko : enUS;

  return (
    <div className="p-20" onClick={onClick || (() => push(`/community/${articleId}`, false))}>
      <Flex justify="between" align="center">
        <ArticleBadge type={category.name}>{t(`category.${category.name}`)}</ArticleBadge>
        <p className="text-caption text-sign-tertiary">
          {/*{formatDistanceStrict(new Date(createdAt), currentKoreaTime, { addSuffix: true, locale })}*/}

        </p>
      </Flex>
      <Spacing size={12} />
      <Flex justify="between" className="gap-6">
        <div>
          <p className="text-subtitle-1">{title}</p>
          <Spacing size={4} />
          <p className="line-clamp-2 break-words text-paragraph-2">{content}</p>
        </div>
        {!!images?.length && (
          <div className="relative h-80 w-80 shrink-0 overflow-hidden rounded-8">
            <Image src={images[0]} alt="이미지" fill className="object-cover" />
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
          />
          <p className="text-paragraph-2">{nickName}</p>
          <Icon id={`16-reliability-${reliabilityLevel.toLowerCase()}`} width={16} height={16} />
        </Flex>
        <Flex align="center" className="gap-8">
          <Flex align="center" className="gap-4">
            <Icon id="16-favorite_fill" width={16} height={16} />
            <p className="text-caption text-warning">{likeCount.toString().padStart(2, '0')}</p>
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
