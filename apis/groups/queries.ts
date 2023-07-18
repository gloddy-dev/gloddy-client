import { getGroupsServer } from './apis';
import { Keys } from './keys';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useGetExample = () => {};

export const useGetGroups = () => useQuery(Keys.getGroupsServer(), () => getGroupsServer());
