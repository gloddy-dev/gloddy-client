import privateApi from '../config/privateApi';

import type { PraisesResponse, ProfileResponse } from './type';

export const getProfile = () => privateApi.get<ProfileResponse>('/me/page');

export const getPraises = () => privateApi.get<PraisesResponse>('/me/praises');
