import { getGroups } from './apis.client';
import { Keys } from './keys';
import { useQuery } from '@tanstack/react-query';

export const useGetGroups = (pageNum: number) => {
  return useQuery(Keys.getGroups(), () => getGroups(pageNum));
};
