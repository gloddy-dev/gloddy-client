import { getMates, getPraises, getProfile, getProfileById } from './apis';
import { Keys } from './keys';
import { useSuspenseQuery } from '@suspensive/react-query';

export const useGetProfile = () =>
  useSuspenseQuery(Keys.getProfile(), getProfile, {
    select: (data) => {
      const { introduce } = data;
      const defaultIntroduce = introduce ?? '';
      return { ...data, introduce: defaultIntroduce };
    },
  });

export const useGetProfileById = (userId: number) =>
  useSuspenseQuery(Keys.getProfileById(userId), () => getProfileById(userId), {
    select: (data) => {
      const { introduce } = data;

      const defaultIntroduce = introduce ?? '';

      return { ...data, introduce: defaultIntroduce };
    },
  });

export const useGetPraises = () => useSuspenseQuery(Keys.getPraises(), getPraises);

export const useGetMates = () => useSuspenseQuery(Keys.getMates(), getMates);
