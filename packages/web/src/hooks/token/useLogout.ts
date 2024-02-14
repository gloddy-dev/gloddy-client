import { useRouter } from 'next/navigation';

import { removeToken } from '@/utils/auth/tokenController';
import { getIsAndroid } from '@/utils/getIsAndroid';
import { getIsIOS } from '@/utils/getIsIOS';
import sendMessageToReactNative from '@/utils/sendMessageToReactNative';

export default function useLogout() {
  const router = useRouter();

  const isIOS = getIsIOS();
  const isAndroid = getIsAndroid();

  const logout = () => {
    removeToken();

    if (isIOS || isAndroid) {
      sendMessageToReactNative({ type: 'AUTH', data: 'LOG_OUT' });
    } else {
      router.push('/join');
    }
  };

  return { logout };
}
