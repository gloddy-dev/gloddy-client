import { Keys, getNotification } from '.';
import { useSuspenseQuery } from '@suspensive/react-query';

export const useGetNotifications = () => useSuspenseQuery(Keys.getNotifications(), getNotification);
