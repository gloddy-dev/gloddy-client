import privateApi from '../config/privateApi';

import type { MatesResponse, PraisesResponse, ProfileRequest, ProfileResponse } from '.';
import type { EmailVerifyRequest } from '../auth';

export const getProfile = () => privateApi.get<ProfileResponse>('/me/page');

export const getProfileById = (userId: number) =>
  privateApi.get<ProfileResponse>(`/users/${userId}/me/page`);

export const postEmailVerify = (emailVerifyData: EmailVerifyRequest) =>
  privateApi.post('/users/email/verify-code', emailVerifyData);

export const getPraises = () => privateApi.get<PraisesResponse>('/me/praises');

export const patchProfile = (profileData: ProfileRequest) =>
  privateApi.patch('/me/info', profileData);

export const getMates = () => privateApi.get<MatesResponse>('/me/mates');

export const deleteMate = (mateId: number) => privateApi.delete(`/me/mate/${mateId}`);

export const patchSignOut = () => privateApi.patch('/auth/sign-out');
