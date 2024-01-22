'use client';

import { Suspense } from 'react';

import { useGetCommunityArticleDetail } from '@/apis/community';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import useAppRouter from '@/hooks/useAppRouter';

interface ArticleDetailHeaderProps {
  articleId: number;
}

export default function ArticleDetailHeader({ articleId }: ArticleDetailHeaderProps) {
  const { back } = useAppRouter();
  const { t } = useTranslation('community');
  const { data: articleData } = useGetCommunityArticleDetail(articleId);

  const title = articleData.data.article.category.name;

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={() => back()}>
          <Icon id="24-arrow_back" />
        </IconButton>
        <Suspense>
          <p className="w-full truncate">{t(`category.${title}`)}</p>
        </Suspense>
      </Header.Left>
      <Header.Right>
        <Suspense>
          <IconButtonAction />
        </Suspense>
      </Header.Right>
    </Header>
  );
}

function IconButtonAction() {
  return (
    <IconButton size="large">
      <Icon id="24-more" />
    </IconButton>
  );
}
