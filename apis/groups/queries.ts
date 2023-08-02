import { getArticles, getGroup, getGroups } from './apis';
import { Keys } from './keys';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useGetGroups = (pageNum: number) => {
  return useQuery(Keys.getGroups(), () => getGroups(pageNum));
};

export const useGetGroup = (groupId: number) => {
  return useQuery(Keys.getGroup(groupId), () => getGroup(groupId));
};

export const useGetArticles = (groupId: number) => {
  return useInfiniteQuery(
    Keys.getArticles(groupId),
    ({ pageParam = 1 }) => getArticles(groupId, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.currentPage + 1,
    }
  );
};
