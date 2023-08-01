import { getLocalCookie, setLocalCookie } from '../cookieController';
import { isServer } from '@/constants';
import { AUTH_KEYS } from '@/constants/token';
import { CookieKeyType } from '@/types';

export const getTokenFromCookie = async () => {
  if (isServer) {
    const { cookies } = await import('next/headers');
    const cookieStore = cookies();
    const accessToken = cookieStore.get(AUTH_KEYS.accessToken)?.value;
    const refreshToken = cookieStore.get(AUTH_KEYS.refreshToken)?.value;
    const userId = +(cookieStore.get(AUTH_KEYS.userId)?.value || 0);
    return { accessToken, refreshToken, userId };
  } else {
    const accessToken = getLocalCookie(AUTH_KEYS.accessToken);
    const refreshToken = getLocalCookie(AUTH_KEYS.refreshToken);
    const userId = +(getLocalCookie(AUTH_KEYS.userId) || 0);

    return { accessToken, refreshToken, userId };
  }
};

export const setTokenAtCookie = async ({ accessToken, refreshToken, userId }: CookieKeyType) => {
  if (isServer) {
    const { cookies } = await import('next/headers');
    const cookieStore = cookies();
    cookieStore.set(AUTH_KEYS.accessToken, accessToken);
    cookieStore.set(AUTH_KEYS.refreshToken, refreshToken);
    cookieStore.set(AUTH_KEYS.userId, '' + userId);
  } else {
    setLocalCookie(AUTH_KEYS.accessToken, accessToken);
    setLocalCookie(AUTH_KEYS.refreshToken, refreshToken);
    setLocalCookie(AUTH_KEYS.userId, '' + userId);
  }
};
