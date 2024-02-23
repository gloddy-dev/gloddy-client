'use client';
import { useGetArticle, useGetGroupDetail } from '@/apis/groups';
import { useMoreSheet } from '@/app/[lng]/(main)/grouping/hooks/useMoreSheet';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import useAppRouter from '@/hooks/useAppRouter';
import { useNumberParams } from '@/hooks/useNumberParams';
import { Suspense } from 'react';

export default function ArticleHeader() {
  const { t } = useTranslation('groupDetail');
  const { back } = useAppRouter();
  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={back}>
          <Icon id="24-arrow_back" />
        </IconButton>
        <p>{t('article.headerTitle')}</p>
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
  const { groupId, articleId } = useNumberParams<['groupId', 'articleId']>();
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { data: articleData } = useGetArticle(groupId, articleId);
  const { isWriter, notice } = articleData;
  const { isCaptain } = groupDetailData;
  const { handleMoreClick } = useMoreSheet({
    type: notice ? 'notice' : 'article',
    isWriter,
    isCaptain,
    groupId,
    articleId,
  });

  return (
    <IconButton size="large" onClick={handleMoreClick}>
      <Icon id="24-more" />
    </IconButton>
  );
}
