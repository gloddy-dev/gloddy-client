import { Keys, getMates, getPraises, getProfile, getProfileById } from '.';
import { useSuspenseQuery } from '@suspensive/react-query';

export const useGetProfile = () =>
  useSuspenseQuery(Keys.getProfile(), getProfile, {
    select: (data) => {
      const { introduce, countryName, countryImage } = data;
      return {
        ...data,
        introduce: introduce || '',
        countryName: countryName || 'Korea',
        countryImage:
          countryImage ||
          'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/241/20220224_233513043.gif',
      };
    },
    staleTime: 0,
    refetchOnWindowFocus: true,
  });

export const useGetProfileById = (userId: number) =>
  useSuspenseQuery(Keys.getProfileById(userId), () => getProfileById(userId), {
    select: (data) => {
      const { introduce } = data;

      const defaultIntroduce = introduce ?? '';

      return { ...data, introduce: defaultIntroduce };
    },
    staleTime: Infinity,
  });

export const useGetPraises = () => useSuspenseQuery(Keys.getPraises(), getPraises);

export const useGetMates = () => useSuspenseQuery(Keys.getMates(), getMates);
