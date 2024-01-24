import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';

import {
  getCommunityArticleComments,
  getCommunityArticleDetail,
  getCommunityArticles,
} from '@/apis/community/apis';
import { Keys } from '@/apis/community/keys';

export const useGetCommunityArticles = (categoryId: number) => {
  const { data, ...rest } = useSuspenseInfiniteQuery({
    queryKey: Keys.getCommunityArticles(categoryId),
    queryFn: ({ pageParam = 0 }) => getCommunityArticles({ categoryId, pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.data.totalPage !== lastPage.data.currentPage
        ? lastPage.data.currentPage + 1
        : undefined,
    initialPageParam: 0,
  });

  return {
    data: data.pages?.flatMap((page) => page.data.contents),
    ...rest,
  };
};

export const useGetCommunityArticleDetail = (articleId: number) => {
  return useSuspenseQuery({
    queryKey: Keys.getCommunityArticleDetail(articleId),
    queryFn: () => getCommunityArticleDetail(articleId),
  });
};

export const useGetCommunityArticleComments = (articleId: number) => {
  return useSuspenseQuery({
    queryKey: Keys.getCommunityArticleComments(articleId),
    queryFn: () => getCommunityArticleComments(articleId),
  });
};
