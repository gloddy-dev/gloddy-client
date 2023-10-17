import {
  getApplies,
  getArticle,
  getArticles,
  getComments,
  getEstimate,
  getGroupDetail,
  getGroupMembers,
  getGroups,
  getNotices,
} from './apis';
import { Keys } from './keys';
import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@suspensive/react-query';
import { useMemo } from 'react';

export const useGetGroups = () => {
  const { data, ...rest } = useSuspenseInfiniteQuery(
    Keys.getGroups(),
    ({ pageParam = 0 }) => getGroups(pageParam),
    {
      getNextPageParam: (lastPage) =>
        lastPage.totalPage !== lastPage.currentPage ? lastPage.currentPage + 1 : undefined,
    }
  );

  const mergeData = useMemo(() => data.pages?.flatMap((page) => page.contents), [data.pages]);

  return {
    data: mergeData,
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

export const useGetArticle = (groupId: number, articleId: number) => {
  return useSuspenseQuery(
    Keys.getArticle(groupId, articleId),
    () => getArticle(groupId, articleId),
    {
      cacheTime: 0,
    }
  );
};

export const useGetComments = (groupId: number, articleId: number) => {
  return useSuspenseQuery(Keys.getComments(groupId, articleId), () =>
    getComments(groupId, articleId)
  );
};

export const useGetGroupMembers = (groupId: number) => {
  return useSuspenseQuery(Keys.getGroupMembers(groupId), () => getGroupMembers(groupId));
};

export const useGetNotices = (groupId: number) => {
  return useSuspenseQuery(Keys.getNotices(groupId), () => getNotices(groupId));
};

export const useGetApplies = (groupId: number) => {
  return useSuspenseQuery(Keys.getApplies(groupId), () => getApplies(groupId));
};

export const useGetEstimate = (groupId: number) =>
  useSuspenseQuery(Keys.getEstimate(groupId), () => getEstimate(groupId));
