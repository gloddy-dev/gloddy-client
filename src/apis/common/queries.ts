import { Keys, getNotification } from '.';
import { useSuspenseQuery } from '@suspensive/react-query';

export const useGetNotifications = () => {
  return useSuspenseQuery(Keys.getNotifications(), getNotification);
};
