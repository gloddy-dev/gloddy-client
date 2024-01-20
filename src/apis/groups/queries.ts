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
import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

export const useGetGroups = () => {
  const { data, ...rest } = useSuspenseInfiniteQuery({
    queryKey: Keys.getGroups(),
    queryFn: ({ pageParam = 0 }) => getGroups(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.totalPage !== lastPage.currentPage ? lastPage.currentPage + 1 : undefined,
    initialPageParam: 0,
  });

  const mergeData = useMemo(() => data.pages?.flatMap((page) => page.contents), [data.pages]);

  return {
    data: mergeData,
    ...rest,
  };
};

export const useGetGroupDetail = (groupId: number) => {
  return useSuspenseQuery({
    queryKey: Keys.getGroupDetail(groupId),
    queryFn: () => getGroupDetail(groupId),
  });
};

export const useGetArticles = (groupId: number) => {
  const { data, ...rest } = useSuspenseInfiniteQuery({
    queryKey: Keys.getArticles(groupId),
    queryFn: ({ pageParam = 0 }) => getArticles(groupId, pageParam),
    getNextPageParam: (lastPage) => lastPage.currentPage + 1,
    initialPageParam: 0,
  });

  return {
    data: data.pages?.flatMap((page) => page.contents),
    ...rest,
  };
};

export const useGetArticle = (groupId: number, articleId: number) => {
  return useSuspenseQuery({
    queryKey: Keys.getArticle(groupId, articleId),
    queryFn: () => getArticle(groupId, articleId),
    gcTime: 0,
  });
};

export const useGetComments = (groupId: number, articleId: number) => {
  return useSuspenseQuery({
    queryKey: Keys.getComments(groupId, articleId),
    queryFn: () => getComments(groupId, articleId),
  });
};

export const useGetGroupMembers = (groupId: number) => {
  return useSuspenseQuery({
    queryKey: Keys.getGroupMembers(groupId),
    queryFn: () => getGroupMembers(groupId),
  });
};

export const useGetNotices = (groupId: number) => {
  return useSuspenseQuery({
    queryKey: Keys.getNotices(groupId),
    queryFn: () => getNotices(groupId),
  });
};

export const useGetApplies = (groupId: number) => {
  return useSuspenseQuery({
    queryKey: Keys.getApplies(groupId),
    queryFn: () => getApplies(groupId),
  });
};

export const useGetEstimate = (groupId: number) =>
  useSuspenseQuery({ queryKey: Keys.getEstimate(groupId), queryFn: () => getEstimate(groupId) });
