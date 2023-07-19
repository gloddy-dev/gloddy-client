import { getGroups } from './apis';
import { Keys } from './keys';
import { useQuery } from '@tanstack/react-query';

export const useGetGroups = (pageNum: number) =>
  useQuery(Keys.getGroups(), () => getGroups(pageNum));
