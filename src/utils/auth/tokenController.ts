import { getLocalCookie, setLocalCookie } from '../cookieController';
import { AUTH_KEYS } from '@/constants/token';

import type { CookieKeyType } from '@/types';

export const getTokenFromCookie = async () => {
  if (typeof window === 'undefined') {
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
  if (typeof window === 'undefined') {
    const { cookies } = await import('next/headers');
    const cookieStore = cookies();
    cookieStore.set(AUTH_KEYS.accessToken, accessToken, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60 + 9 * 60 * 60 * 1000),
    });
    cookieStore.set(AUTH_KEYS.refreshToken, refreshToken, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60 + 9 * 60 * 60 * 1000),
    });
    cookieStore.set(AUTH_KEYS.userId, '' + userId);
  } else {
    setLocalCookie(AUTH_KEYS.accessToken, accessToken, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60 + 9 * 60 * 60 * 1000),
    });
    setLocalCookie(AUTH_KEYS.refreshToken, refreshToken, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60 + 9 * 60 * 60 * 1000),
    });
    setLocalCookie(AUTH_KEYS.userId, '' + userId);
  }
};
