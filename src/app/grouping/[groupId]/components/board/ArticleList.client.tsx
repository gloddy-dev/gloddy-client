'use client';

import { useGetArticles } from '@/apis/groups/queries';
import ArticleItem from '@/app/grouping/components/ArticleItem.client';
import { Flex } from '@/components/Layout';
import { DUMMY_ARTICLES_DATA } from '@/constants/dummyData';
import { useParams } from 'next/navigation';

interface ArticleListProps {
  isCaptain: boolean;
}

export default function ArticleList({ isCaptain }: ArticleListProps) {
  const params = useParams();
  const groupId = Number(params.groupId);

  const { data: articlesData } = useGetArticles(groupId);

  if (!articlesData.length) return <p>게시글이 없습니다.</p>;

  return (
    <Flex direction="column">
      {DUMMY_ARTICLES_DATA.map((article) => (
        <ArticleItem
          key={article.articleId}
          article={article}
          isCaptain={isCaptain}
          isBoardDetail
        />
      ))}
    </Flex>
  );
}
