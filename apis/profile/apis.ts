import privateApi from '../config/privateApi';

import type { ProfileResponse } from './type';

export const getProfile = () => privateApi.get<ProfileResponse>('/me/page');
