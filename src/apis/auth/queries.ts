import { Keys, NicknameDuplicateResponse, getNicknameDuplicate, getSchoolSearch } from '.';
import { useSuspenseQuery } from '@suspensive/react-query';
import { UseQueryOptions } from '@tanstack/react-query';
import { useState } from 'react';

export const useGetSearchSchool = (searchWord: string) =>
  useSuspenseQuery(Keys.getSchoolSearch(searchWord), () => getSchoolSearch(searchWord), {
    enabled: !!searchWord,
  });

export const useGetNicknameDuplicate = (nickname: string) => {
  return {
    ...useSuspenseQuery<NicknameDuplicateResponse>(
      Keys.getNicknameDuplicate(nickname),
      () => getNicknameDuplicate(nickname),
      {
        enabled: false,
      }
    ),
  };
};
