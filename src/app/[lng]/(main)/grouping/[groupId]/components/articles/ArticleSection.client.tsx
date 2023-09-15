'use client';

import { GroupDetailResponse } from '@/apis/groups';
import { useGetArticles } from '@/apis/groups/queries';
import ArticleItem from '@/app/[lng]/(main)/grouping/components/ArticleItem.client';
import { ItemList } from '@/components/List';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useBlockStore } from '@/store/useBlockStore';

interface ArticlesContentProps extends GroupDetailResponse {}

export default function ArticleSection({ isCaptain }: ArticlesContentProps) {
  const { blockArticleIds } = useBlockStore();
  const { groupId } = useNumberParams<['groupId']>();
  const { data: articlesData } = useGetArticles(groupId);

  return (
    <section>
      <ItemList
        data={articlesData}
        renderItem={(article) => {
          return (
            !blockArticleIds.includes(article.articleId) && (
              <ArticleItem article={article} isCaptain={isCaptain} groupId={groupId} />
            )
          );
        }}
      />
    </section>
  );
}
