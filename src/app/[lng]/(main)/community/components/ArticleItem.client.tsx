'use client';

import ArticleBadge from './ArticleBadge.client';
import { Article } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Avatar } from '@/components/Avatar';
import { Divider } from '@/components/Divider';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { currentKoreaTime } from '@/utils/date';
import { formatDistanceStrict } from 'date-fns';
import { enUS, ko } from 'date-fns/locale';
import Image from 'next/image';

interface ArticleItemProps {
  article: Article;
}

export default function ArticleItem({ article }: ArticleItemProps) {
  const { t, i18n } = useTranslation('community');
  const {
    content,
    images,
    commentCount,
    date,
    userImageUrl,
    name,
    isWriterCertifiedStudent,
    writerReliabilityLevel,
  } = article;

  const locale = i18n.language === 'ko' ? ko : enUS;
  const title = '홍대가는 방법';
  const likeCount = 0;
  const articleType = 'question';

  return (
    <div className="p-20">
      <Flex justify="between" align="center">
        <ArticleBadge type={articleType}>{t(articleType)}</ArticleBadge>
        <p className="text-caption text-sign-tertiary">
          {formatDistanceStrict(new Date(date), currentKoreaTime, { addSuffix: true, locale })}
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
            imageUrl={userImageUrl}
            size="x-small"
            iconVariant={isWriterCertifiedStudent ? 'education' : 'none'}
          />
          <p className="text-paragraph-2">{name}</p>
          <Icon
            id={`16-reliability-${writerReliabilityLevel.toLowerCase()}`}
            width={16}
            height={16}
          />
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
