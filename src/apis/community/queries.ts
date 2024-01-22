import { useQueryClient, useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';

import { getCommunityArticleDetail, getCommunityArticles } from '@/apis/community/apis';
import { Keys } from '@/apis/community/keys';

export const useGetCommunityArticles = (categoryId?: number) => {
  const queryClient = useQueryClient();

  const { data, ...rest } = useSuspenseInfiniteQuery({
    queryKey: Keys.getCommunityArticles(categoryId || 0),
    queryFn: ({ pageParam = 0 }) => getCommunityArticles({ categoryId, pageParam }),
    getNextPageParam: (lastPage) => lastPage.data.currentPage + 1,
    initialPageParam: 0,
  });

  const resetAllCategory = () => {
    queryClient.resetQueries({ queryKey: Keys.getCommunityArticles(0) });
    queryClient.resetQueries({ queryKey: Keys.getCommunityArticles(1) });
    queryClient.resetQueries({ queryKey: Keys.getCommunityArticles(2) });
    queryClient.resetQueries({ queryKey: Keys.getCommunityArticles(3) });
  };

  return {
    data: data.pages?.flatMap((page) => page.data.contents),
    resetAllCategory,
    ...rest,
  };
};

export const useGetCommunityArticleDetail = (articleId: number) => {
  return useSuspenseQuery({
    queryKey: Keys.getCommunityArticleDetail(articleId),
    queryFn: () => getCommunityArticleDetail(articleId),
  });
};
