import { ProfileResponse } from './type';
import privateApi from '../config/privateApi';

export const getProfile = () => privateApi<ProfileResponse>('/me/page');
