'use client';

import { useGetArticles, useGetGroupDetail } from '@/apis/groups/queries';
import ArticleItem from '@/app/(main)/grouping/components/ArticleItem.client';
import { Divider } from '@/components/Divider';
import { Flex } from '@/components/Layout';
import { useNumberParams } from '@/hooks/useNumberParams';
import { Fragment } from 'react';

export default function ArticleList() {
  const { groupId } = useNumberParams<['groupId']>();

  const { data: articlesData } = useGetArticles(groupId);
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { isCaptain } = groupDetailData;

  return (
    <Flex direction="column">
      {articlesData.map((article) => (
        <Fragment key={article.articleId}>
          <ArticleItem
            key={article.articleId}
            article={article}
            isCaptain={isCaptain}
            groupId={groupId}
          />
          <Divider />
        </Fragment>
      ))}
    </Flex>
  );
}
