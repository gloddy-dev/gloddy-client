import { FCMTokenRequest } from '../common';
import { privateApiNotification } from '../config/privateApiNotification';

export const postFCMToken = ({ token }: FCMTokenRequest) => {
  return privateApiNotification.post('/notifications/tokens', { token });
};

export const getNotification = () => {
  return privateApiNotification.get('/notifications');
};
