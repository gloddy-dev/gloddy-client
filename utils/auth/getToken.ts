import { getCookie } from '../cookie';
import { isServer } from '@/constants';
import { AUTH_KEYS } from '@/constants/token';

export const getToken = async () => {
  if (isServer) {
    const { cookies } = await import('next/headers');
    const cookieStore = cookies();
    const accessToken = cookieStore.get(AUTH_KEYS.accessToken)?.value;
    const refreshToken = cookieStore.get(AUTH_KEYS.refreshToken)?.value;
    const userId = cookieStore.get(AUTH_KEYS.userId)?.value as unknown as number;
    return { accessToken, refreshToken, userId };
  } else {
    const accessToken = getCookie(AUTH_KEYS.accessToken);
    const refreshToken = getCookie(AUTH_KEYS.refreshToken);
    const userId = getCookie(AUTH_KEYS.userId);

    return { accessToken, refreshToken, userId };
  }
};
