import { useSuspenseQuery } from '@tanstack/react-query';

import { Keys, getNotification } from '.';

export const useGetNotifications = () =>
  useSuspenseQuery({ queryKey: Keys.getNotifications(), queryFn: getNotification });
