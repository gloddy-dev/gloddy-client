'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ArticleItem from './ArticleItem';

import { useGetCommunityArticles } from '@/apis/community/queries';
import { useTranslation } from '@/app/i18n/client';
import { Empty } from '@/components/Empty';
import { ItemList } from '@/components/List';
import { useBlockStore } from '@/store/useBlockStore';

interface CommunityArticle {
  categoryId: number;
}

export default function CommunityArticles({ categoryId }: CommunityArticle) {
  const { t } = useTranslation('community');
  const { ref, inView } = useInView();
  const { blockCommunityArticleIds } = useBlockStore();
  const { data: articleList, fetchNextPage, hasNextPage } = useGetCommunityArticles(categoryId);

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <>
      <ItemList
        data={articleList}
        renderItem={(articleData) => {
          return (
            !blockCommunityArticleIds.includes(articleData.article.id) && (
              <ArticleItem articleData={articleData} />
            )
          );
        }}
        renderEmpty={() => <Empty message={t('empty')} />}
      />
      <div ref={ref} />
    </>
  );
}
