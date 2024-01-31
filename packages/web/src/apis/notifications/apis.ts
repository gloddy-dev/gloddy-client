import { FCMTokenRequest } from '.';
import { NotificationResponse } from '.';
import privateApi from '../config/privateApi';

export const postFCMToken = ({ token }: FCMTokenRequest) =>
  privateApi.post('/notifications/tokens', { token });

export const getNotification = () => privateApi.get<NotificationResponse>('/notifications');
