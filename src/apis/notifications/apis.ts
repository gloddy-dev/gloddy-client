import { FCMTokenRequest } from '.';
import { NotificationResponse } from '.';
import { privateApiNotification } from '../config/privateApiNotification';

export const postFCMToken = ({ token }: FCMTokenRequest) =>
  privateApiNotification.post('/notifications/tokens', { token });

export const getNotification = () =>
  privateApiNotification.get<NotificationResponse>('/notifications');
