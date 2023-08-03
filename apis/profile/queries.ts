import { getProfile } from './apis';
import { Keys } from './keys';
import { useQuery } from '@tanstack/react-query';

export const useGetProfile = () => useQuery(Keys.getProfile(), getProfile);
