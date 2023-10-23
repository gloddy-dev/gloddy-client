'use client';

import ArticleItem from './ArticleItem.client';
import Empty from './Empty';
import { ItemList } from '@/components/List';

import type { Article } from '@/apis/groups';

export default function DailyContent() {
  const articleData: Article[] = [];

  return (
    <ItemList
      data={articleData}
      renderItem={(article) => <ArticleItem article={article} />}
      renderEmpty={() => <Empty />}
    />
  );
}
