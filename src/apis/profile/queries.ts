import { getMates, getPraises, getProfile } from './apis';
import { Keys } from './keys';
import { useSuspenseQuery } from '@suspensive/react-query';

export const useGetProfile = () =>
  useSuspenseQuery(Keys.getProfile(), getProfile, {
    select: (data) => {
      const { birth } = data;

      const formattedBirth = {
        year: birth.split('.')[0],
        month: birth.split('.')[1],
        date: birth.split('.')[2],
      };

      return { ...data, birth: formattedBirth };
    },
  });

export const useGetPraises = () => useSuspenseQuery(Keys.getPraises(), getPraises);

export const useGetMates = () => useSuspenseQuery(Keys.getMates(), getMates);
