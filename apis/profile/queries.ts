import { getProfile } from './apis';
import { Keys } from './keys';
import { useSuspenseQuery } from '@suspensive/react-query';

export const useGetProfile = () => useSuspenseQuery(Keys.getProfile(), getProfile);
