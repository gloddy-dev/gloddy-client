import { Keys, NicknameDuplicateResponse, getNicknameDuplicate, getSchoolSearch } from '.';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { UseFormClearErrors, UseFormSetError } from 'react-hook-form';

export const useGetSearchSchool = (searchWord: string) =>
  useSuspenseQuery({
    queryKey: Keys.getSchoolSearch(searchWord),
    queryFn: () => getSchoolSearch(searchWord),
  });

type InputType = { nickname: string };
interface UseGetNicknameDuplicateProps {
  nickname: string;
  setError: UseFormSetError<InputType>;
  clearErrors: UseFormClearErrors<InputType>;
}

export const useGetNicknameDuplicate = ({
  nickname,
  setError,
  clearErrors,
}: UseGetNicknameDuplicateProps) => {
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);
  const checkNicknameDuplicate = (isExistNickname: boolean) => {
    if (isExistNickname) {
      setError('nickname', {
        type: 'duplicate',
        message: '이미 사용중인 닉네임입니다.',
      });
    } else {
      setIsDuplicateChecked(true);
      clearErrors('nickname');
    }
  };

  return {
    ...useSuspenseQuery<NicknameDuplicateResponse>({
      queryKey: Keys.getNicknameDuplicate(nickname),
      queryFn: () => getNicknameDuplicate(nickname),
      // onSuccess: (data: any) => {
      // checkNicknameDuplicate(data.isExistNickname);
      // },
    }),
    isDuplicateChecked,
    setIsDuplicateChecked,
  };
};
