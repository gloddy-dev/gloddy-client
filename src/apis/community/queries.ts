import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';

import { getCommunityArticleDetail, getCommunityArticles } from '@/apis/community/apis';
import { Keys } from '@/apis/community/keys';
import { getGroupDetail } from '@/apis/groups';

export const useGetCommunityArticles = (categoryId?: number) => {
  const { data, ...rest } = useSuspenseInfiniteQuery({
    queryKey: Keys.getCommunityArticles(categoryId || 0),
    queryFn: ({ pageParam = 0 }) => getCommunityArticles({ categoryId, pageParam }),
    getNextPageParam: (lastPage) => lastPage.data.currentPage + 1,
    initialPageParam: 0,
  });

  return {
    data: data.pages?.flatMap((page) => page.data.contents),
    ...rest,
  };
};

export const useGetCommunityArticleDetail = (articleId: number) => {
  const { data } = useSuspenseQuery({
    queryKey: Keys.getCommunityArticleDetail(articleId),
    queryFn: () => getCommunityArticleDetail(articleId),
  });

  return {
    data: data.data,
  };
};
