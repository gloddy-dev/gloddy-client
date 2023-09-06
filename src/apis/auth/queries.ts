'use client';
import { Keys, NicknameDuplicateResponse, getNicknameDuplicate, getSchoolSearch } from '.';
import { useSuspenseQuery } from '@suspensive/react-query';
import { useState } from 'react';
import { UseFormClearErrors, UseFormSetError } from 'react-hook-form';

export const useGetSearchSchool = (searchWord: string) =>
  useSuspenseQuery(Keys.getSchoolSearch(searchWord), () => getSchoolSearch(searchWord), {
    enabled: !!searchWord,
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
    ...useSuspenseQuery<NicknameDuplicateResponse>(
      Keys.getNicknameDuplicate(nickname),
      () => getNicknameDuplicate(nickname),
      {
        enabled: false,
        onSuccess: (data) => {
          checkNicknameDuplicate(data.isExistNickname);
        },
      }
    ),
    isDuplicateChecked,
    setIsDuplicateChecked,
  };
};
