'use client';

import { useGetArticles } from '@/apis/groups/queries';
import ArticleItem from '@/app/grouping/components/ArticleItem.client';
import { DUMMY_ARTICLES_DATA } from '@/constants/dummyData';
import { useParams } from 'next/navigation';

export default function ArticleList() {
  const params = useParams();
  const groupId = Number(params.groupId);

  // const { data: articlesData } = useGetArticles(groupId);

  // if (!articlesData.length) return <p>게시글이 없습니다.</p>;

  return (
    <div className="flex flex-col gap-15">
      {DUMMY_ARTICLES_DATA.map((article) => (
        <ArticleItem key={article.articleId} article={article} />
      ))}
    </div>
  );
}
