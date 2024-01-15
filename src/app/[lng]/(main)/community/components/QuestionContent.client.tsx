'use client';

import ArticleItem from './ArticleItem.client';
import Empty from './Empty';
import { ItemList } from '@/components/List';
import { DUMMY_ARTICLES_DATA } from '@/constants/dummyData';

import type { CommunityArticle } from '@/apis/groups';

export default function QuestionContent() {
  const articleData: CommunityArticle[] = [...DUMMY_ARTICLES_DATA].filter(
    (article) => article.articleType === 'question'
  );

  return (
    <ItemList
      data={articleData}
      renderItem={(article) => <ArticleItem article={article} />}
      renderEmpty={() => <Empty />}
    />
  );
}
