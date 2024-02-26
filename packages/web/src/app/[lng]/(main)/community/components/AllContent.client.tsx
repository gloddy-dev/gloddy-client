'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useGetCommunityArticles } from '@/apis/community/queries';
import ArticleItem from '@/app/[lng]/(main)/community/components/ArticleItem.client';
import Empty from '@/app/[lng]/(main)/community/components/Empty';
import { ItemList } from '@/components/List';
import { Loading } from '@/components/Loading';
import { useBlockStore } from '@/store/useBlockStore';

export default function AllContent() {
  const { ref, inView } = useInView();
  const { blockCommunityArticleIds } = useBlockStore();
  const { data: articleList, fetchNextPage, isFetching, hasNextPage } = useGetCommunityArticles(0);

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
        renderEmpty={() => <Empty />}
      />
      <div ref={ref} />
      {isFetching && <Loading className="h-10" />}
    </>
  );
}
