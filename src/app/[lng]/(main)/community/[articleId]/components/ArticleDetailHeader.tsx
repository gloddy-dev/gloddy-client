'use client';

import { Suspense } from 'react';

import { useGetCommunityArticleDetail, usePostDeleteCommunityArticle } from '@/apis/community';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { DropDown } from '@/components/DropDown';
import { DropDownOptionType } from '@/components/DropDown/DropDown';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import useAppRouter from '@/hooks/useAppRouter';
import { useNumberParams } from '@/hooks/useNumberParams';

export default function ArticleDetailHeader() {
  const { back } = useAppRouter();
  const { articleId } = useNumberParams<['articleId']>();
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
        <IconButtonAction />
      </Header.Right>
    </Header>
  );
}

function IconButtonAction() {
  const { articleId } = useNumberParams<['articleId']>();
  const { data: articleData } = useGetCommunityArticleDetail(articleId);
  const { mutate: mutateDelete } = usePostDeleteCommunityArticle(articleId);

  const handleBlockArticle = () => {
    console.log('block');
  };

  const handleDeleteArticle = () => {
    mutateDelete();
  };

  const options: DropDownOptionType[] = [
    {
      name: '게시물 차단',
      onClick: handleBlockArticle,
    },
    ...(articleData.data.article.isWriter
      ? [
          {
            name: '게시물 삭제',
            onClick: handleDeleteArticle,
          },
        ]
      : []),
  ];

  return (
    <DropDown options={options}>
      <IconButton size="large">
        <Icon id="24-more" />
      </IconButton>
    </DropDown>
  );
}
