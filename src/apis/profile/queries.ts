import { getMates, getPraises, getProfile } from './apis';
import { Keys } from './keys';
import { useSuspenseQuery } from '@suspensive/react-query';

export const useGetProfile = () =>
  useSuspenseQuery(Keys.getProfile(), getProfile, {
    select: (data) => {
      const { birth, introduce } = data;

      const formattedBirth = {
        year: +birth.split('.')[0] + '년',
        month: +birth.split('.')[1] + '월',
        date: +birth.split('.')[2] + '일',
      };

      const defaultIntroduce = introduce ?? '';

      return { ...data, introduce: defaultIntroduce, birth: formattedBirth };
    },
    staleTime: Infinity,
    cacheTime: Infinity,
  });

export const useGetPraises = () => useSuspenseQuery(Keys.getPraises(), getPraises);

export const useGetMates = () => useSuspenseQuery(Keys.getMates(), getMates);
