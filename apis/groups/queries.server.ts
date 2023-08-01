import { useQuery } from '@tanstack/react-query';
import { Keys } from './keys';
import { getGroups } from './apis.server';

export const useGetGroups = (pageNum: number) => {
  return useQuery(Keys.getGroups(), () => getGroups(pageNum));
};

export const useGetGroup = (groupId: number) => {
  return useQuery(Keys.getGroup(groupId), () => getGroups(groupId));
};
