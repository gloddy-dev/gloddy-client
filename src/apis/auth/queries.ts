import { Keys, getSchoolSearch } from '.';
import { useSuspenseQuery } from '@suspensive/react-query';

export const useGetSearchSchool = (searchWord: string) =>
  useSuspenseQuery(Keys.getSchoolSearch(searchWord), () => getSchoolSearch(searchWord), {
    enabled: !!searchWord,
  });
