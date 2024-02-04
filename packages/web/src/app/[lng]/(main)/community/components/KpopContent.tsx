'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ArticleItem from './ArticleItem.client';
import Empty from './Empty';

import { useGetCommunityArticles } from '@/apis/community/queries';
import { ItemList } from '@/components/List';

export default function KpopContent() {
  const { ref, inView } = useInView();
  const { data: articleList, fetchNextPage } = useGetCommunityArticles(1);

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
