'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useGetCommunityArticles } from '@/apis/community/queries';
import ArticleItem from '@/app/[lng]/(main)/community/components/ArticleItem.client';
import Empty from '@/app/[lng]/(main)/community/components/Empty';
import { ItemList } from '@/components/List';

export default function AllContent() {
  const { ref, inView } = useInView();
  const { data: articleList, fetchNextPage } = useGetCommunityArticles();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <>
      <ItemList
        data={articleList}
        renderItem={(articleData) => <ArticleItem articleData={articleData} />}
        renderEmpty={() => <Empty />}
      />
      <div ref={ref} />
    </>
  );
}
