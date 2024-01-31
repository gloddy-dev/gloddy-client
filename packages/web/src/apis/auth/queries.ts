import { Keys, NicknameDuplicateResponse, getNicknameDuplicate, getSchoolSearch } from '.';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

export const useGetSearchSchool = (searchWord: string) =>
  useSuspenseQuery({
    queryKey: Keys.getSchoolSearch(searchWord),
    queryFn: () => getSchoolSearch(searchWord),
  });

interface UseGetNicknameDuplicateProps {
  nickname: string;
}

export const useGetNicknameDuplicate = ({ nickname }: UseGetNicknameDuplicateProps) => {
  return {
    ...useQuery<NicknameDuplicateResponse>({
      queryKey: Keys.getNicknameDuplicate(nickname),
      queryFn: () => getNicknameDuplicate(nickname),
    }),
  };
};
