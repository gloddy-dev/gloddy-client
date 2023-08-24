import privateApi from '../config/privateApi';

import type { MatesResponse, PraisesResponse, ProfileRequest, ProfileResponse } from './type';

export const getProfile = () => privateApi.get<ProfileResponse>('/me/page');

export const getPraises = () => privateApi.get<PraisesResponse>('/me/praises');

export const patchProfile = (profileData: ProfileRequest) =>
  privateApi.patch('/me/info', profileData);

export const getMates = () => privateApi.get<MatesResponse>('/me/mates');
