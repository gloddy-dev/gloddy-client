'use client';

import ArticleItem from './ArticleItem.client';
import Empty from './Empty';
import { useGetArticles } from '@/apis/groups';
import { ItemList } from '@/components/List';

export default function LanguageContent() {
  const { data: articleData } = useGetArticles(55);

  return (
    <ItemList
      data={articleData}
      renderItem={(article) => <ArticleItem article={article} />}
      renderEmpty={() => <Empty />}
    />
  );
}
