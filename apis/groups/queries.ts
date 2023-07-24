import { getGroups } from '.';
import { Keys } from '.';
import { useQuery } from '@tanstack/react-query';

export const useGetGroups = (pageNum: number) =>
  useQuery(Keys.getGroups(), () => getGroups(pageNum));
