'use client';

import ArticleItem from './ArticleItem.client';
import Empty from './Empty';
import { CommunityArticle } from '@/apis/groups';
import { ItemList } from '@/components/List';
import { DUMMY_ARTICLES_DATA } from '@/constants/dummyData';

export default function AllContent() {
  const articleData: CommunityArticle[] = [...DUMMY_ARTICLES_DATA];

  return (
    <ItemList
      data={articleData}
      renderItem={(article) => <ArticleItem article={article} />}
      renderEmpty={() => <Empty />}
    />
  );
}
