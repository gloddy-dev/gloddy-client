import { getArticles, getGroupDetail, getGroups } from './apis';
import { Keys } from './keys';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useGetGroups = (pageNum: number) => {
  return useQuery(Keys.getGroups(), () => getGroups(pageNum));
};

export const useGetGroupDetail = (groupId: number) => {
  return useQuery(Keys.getGroupDetail(groupId), () => getGroupDetail(groupId));
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
