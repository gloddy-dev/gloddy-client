import { Keys, getNotification } from '.';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useGetNotifications = () =>
  useSuspenseQuery({ queryKey: Keys.getNotifications(), queryFn: getNotification });
