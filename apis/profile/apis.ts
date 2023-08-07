import privateApi from '../config/privateApi';

import type { MatesResponse, PraisesResponse, ProfileResponse } from './type';

export const getProfile = () => privateApi.get<ProfileResponse>('/me/page');

export const getPraises = () => privateApi.get<PraisesResponse>('/me/praises');

export const getMates = () => privateApi.get<MatesResponse>('/me/mates');
