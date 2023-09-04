'use client';

import { useGetArticles, useGetGroupDetail } from '@/apis/groups/queries';
import ArticleItem from '@/app/[lng]/(main)/grouping/components/ArticleItem.client';
import { ItemList } from '@/components/List';
import { useNumberParams } from '@/hooks/useNumberParams';

export default function ArticleSection() {
  const { groupId } = useNumberParams<['groupId']>();

  const { data: articlesData } = useGetArticles(groupId);
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { isCaptain } = groupDetailData;

  return (
    <section>
      <ItemList
        data={articlesData}
        renderItem={(article) => (
          <ArticleItem article={article} isCaptain={isCaptain} groupId={groupId} />
        )}
      />
    </section>
  );
}
