'use client';

import ArticleItem from './ArticleItem.client';
import Empty from './Empty';
import { ItemList } from '@/components/List';
import { DUMMY_ARTICLES_DATA } from '@/constants/dummyData';

import type { Article } from '@/apis/groups';

export default function AllContent() {
  const articleData: Article[] = [...DUMMY_ARTICLES_DATA];

  return (
    <ItemList
      data={articleData}
      renderItem={(article) => <ArticleItem article={article} />}
      renderEmpty={() => <Empty />}
    />
  );
}
