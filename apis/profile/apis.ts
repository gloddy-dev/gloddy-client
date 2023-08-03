import { ProfileResponse } from './type';
import privateApi from '../config/privateApi';

export const getProfile = () => privateApi.get<ProfileResponse>('/me/page');
