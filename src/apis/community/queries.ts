import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getCommunityArticles } from '@/apis/community/apis';
import { Keys } from '@/apis/community/keys';

export const useGetCommunityArticles = (categoryId?: number) => {
  const { data, ...rest } = useSuspenseInfiniteQuery({
    queryKey: Keys.getCommunityArticles(categoryId),
    queryFn: ({ pageParam = 0 }) => getCommunityArticles({ categoryId, pageParam }),
    getNextPageParam: (lastPage) => lastPage.data.currentPage + 1,
    initialPageParam: 0,
  });

  return {
    data: data.pages?.flatMap((page) => page.data.contents),
    ...rest,
  };
};
