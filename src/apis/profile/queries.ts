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
          'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/16/20220318_161654097.gif',
      };
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
