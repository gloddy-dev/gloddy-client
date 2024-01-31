import { removeToken } from '@/utils/auth/tokenController';
import sendMessageToReactNative from '@/utils/sendMessageToReactNative';
import { useRouter } from 'next/navigation';

export default function useLogout() {
  const router = useRouter();

  const logout = () => {
    router.push('/join');
    removeToken();
    sendMessageToReactNative({ type: 'AUTH', data: 'LOG_OUT' });
  };

  return { logout };
}
