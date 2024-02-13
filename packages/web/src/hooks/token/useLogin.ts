import sendMessageToReactNative from '../../utils/sendMessageToReactNative';
import useAppRouter from '../useAppRouter';

import { setTokenAtCookie } from '@/utils/auth/tokenController';
import { getIsAndroid } from '@/utils/getIsAndroid';
import { getIsIOS } from '@/utils/getIsIOS';

interface LoginProps {
  accessToken: string;
  refreshToken: string;
  userId: number;
}
export default function useLogin() {
  const { refresh, replace } = useAppRouter();

  const isIOS = getIsIOS();
  const isAndroid = getIsAndroid();

  const login = async ({ accessToken, refreshToken, userId }: LoginProps) => {
    await setTokenAtCookie({ accessToken, refreshToken, userId });

    if (isIOS || isAndroid) {
      sendMessageToReactNative({ type: 'AUTH', data: 'LOG_IN' });
    } else {
      refresh();
      replace('/grouping');
    }
  };

  return { login };
}
