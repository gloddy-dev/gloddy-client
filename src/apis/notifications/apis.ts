import { FCMTokenRequest } from '.';
import { NotificationResponse } from '.';
import { privateApiNotification } from '../config/privateApiNotification';

export const postFCMToken = ({ token }: FCMTokenRequest) => {
  return privateApiNotification.post('/notifications/tokens', { token });
};

export const getNotification = () => {
  return privateApiNotification.get<NotificationResponse>('/notifications');
};
