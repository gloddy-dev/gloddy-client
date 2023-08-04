import { getArticles, getGroupDetail, getGroups } from './apis';
import { Keys } from './keys';
import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@suspensive/react-query';

export const useGetGroups = () => {
  const { data, ...rest } = useSuspenseInfiniteQuery(
    Keys.getGroups(),
    ({ pageParam = 0 }) => getGroups(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.currentPage + 1,
    }
  );

  return {
    data: data.pages?.flatMap((page) => page.contents),
    ...rest,
  };
};

export const useGetGroupDetail = (groupId: number) => {
  return useSuspenseQuery(Keys.getGroupDetail(groupId), () => getGroupDetail(groupId));
};

export const useGetArticles = (groupId: number) => {
  const { data, ...rest } = useSuspenseInfiniteQuery(
    Keys.getArticles(groupId),
    ({ pageParam = 0 }) => getArticles(groupId, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.currentPage + 1,
    }
  );

  return {
    data: data.pages?.flatMap((page) => page.contents),
    ...rest,
  };
};
