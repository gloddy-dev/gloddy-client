import { getGroups } from './apis.server';
import { Keys } from './keys';
import { useQuery } from '@tanstack/react-query';

export const useGetGroups = (pageNum: number) => {
  return useQuery(Keys.getGroups(), () => getGroups(pageNum));
};

export const useGetGroup = (groupId: number) => {
  return useQuery(Keys.getGroup(groupId), () => getGroups(groupId));
};
