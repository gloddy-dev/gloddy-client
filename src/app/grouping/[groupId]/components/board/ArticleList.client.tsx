'use client';

import { useGetArticles, useGetGroupDetail } from '@/apis/groups/queries';
import ArticleItem from '@/app/grouping/components/ArticleItem.client';
import { Divider } from '@/components/Divider';
import { Flex } from '@/components/Layout';
import { DUMMY_ARTICLES_DATA } from '@/constants/dummyData';
import { useNumberParams } from '@/hooks/useNumberParams';

export default function ArticleList() {
  const { groupId } = useNumberParams<['groupId']>();

  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { isCaptain } = groupDetailData;

  const { data: articlesData } = useGetArticles(groupId);

  if (!articlesData.length) return <p>게시글이 없습니다.</p>;

  return (
    <Flex direction="column">
      {DUMMY_ARTICLES_DATA.map((article) => (
        <>
          <ArticleItem
            key={article.articleId}
            article={article}
            isCaptain={isCaptain}
            isBoardDetail
          />
          <Divider />
        </>
      ))}
    </Flex>
  );
}
