import { Keys, getMates, getPraises, getProfile, getProfileById } from '.';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useGetProfile = () =>
  useSuspenseQuery({
    queryKey: Keys.getProfile(),
    queryFn: getProfile,
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
    refetchOnWindowFocus: true,
    staleTime: 0,
  });

export const useGetProfileById = (userId: number) =>
  useSuspenseQuery({
    queryKey: Keys.getProfileById(userId),
    queryFn: () => getProfileById(userId),
    select: (data) => {
      const { introduce } = data;

      const defaultIntroduce = introduce ?? '';

      return { ...data, introduce: defaultIntroduce };
    },
    staleTime: Infinity,
  });

export const useGetPraises = () =>
  useSuspenseQuery({ queryKey: Keys.getPraises(), queryFn: getPraises });

export const useGetMates = () => useSuspenseQuery({ queryKey: Keys.getMates(), queryFn: getMates });
