'use client';

import ArticleItem from './ArticleItem.client';
import Empty from './Empty';
import { ItemList } from '@/components/List';
import {useInView} from "react-intersection-observer";
import {useGetCommunityArticles} from "@/apis/community/queries";
import {useEffect} from "react";

export default function LanguageContent() {
  const { ref, inView } = useInView();
  const { data: articleList, fetchNextPage } = useGetCommunityArticles(3);

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
