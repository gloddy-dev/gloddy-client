import sendMessageToReactNative from '../../utils/sendMessageToReactNative';
import useAppRouter from '../useAppRouter';

import { setTokenAtCookie } from '@/utils/auth/tokenController';

interface LoginProps {
  accessToken: string;
  refreshToken: string;
  userId: number;
}
export default function useLogin() {
  const { refresh, replace } = useAppRouter();

  const login = async ({ accessToken, refreshToken, userId }: LoginProps) => {
    await setTokenAtCookie({ accessToken, refreshToken, userId });
    sendMessageToReactNative({ type: 'AUTH', data: 'LOG_IN' });
    refresh();
    replace('/grouping');
  };

  return { login };
}
