'use client';

import ArticleItem from './ArticleItem.client';
import Empty from './Empty';
import { ItemList } from '@/components/List';

export default function QuestionContent() {
  return (
    <ItemList
      data={articleData}
      renderItem={(article) => <ArticleItem article={article} />}
      renderEmpty={() => <Empty />}
    />
  );
}
