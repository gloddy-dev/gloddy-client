import { getGroups } from './apis';
import { Keys } from './keys';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useGetExample = () => {};

export const useGetGroups = (pageNum: number) =>
  useQuery(Keys.getGroups(), () => getGroups(pageNum));
