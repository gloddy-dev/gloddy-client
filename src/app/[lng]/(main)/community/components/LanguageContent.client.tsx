'use client';

import ArticleItem from './ArticleItem.client';
import Empty from './Empty';
import { CommunityArticle } from '@/apis/groups';
import { ItemList } from '@/components/List';
import { DUMMY_ARTICLES_DATA } from '@/constants/dummyData';

export default function LanguageContent() {
  const articleData: CommunityArticle[] = [...DUMMY_ARTICLES_DATA].filter(
    (article) => article.articleType === 'language'
  );

  return (
    <ItemList
      data={articleData}
      renderItem={(article) => <ArticleItem article={article} />}
      renderEmpty={() => <Empty />}
    />
  );
}
