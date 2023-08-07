import { getPraises, getProfile } from './apis';
import { Keys } from './keys';
import { useSuspenseQuery } from '@suspensive/react-query';

export const useGetProfile = () => useSuspenseQuery(Keys.getProfile(), getProfile);

export const useGetPraises = () => useSuspenseQuery(Keys.getPraises(), getPraises);
