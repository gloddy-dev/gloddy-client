import { getLocalCookie, removeLocalCookie, setLocalCookie } from '../cookieController';
import { afterDay1, afterDay60 } from '../date';

import type { CookieKeyType } from '@/types';

import { AUTH_KEYS } from '@/constants/token';

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
  // const currentTime = new Date();
  // const day1 = 1000 * 60 * 60 * 24;
  // const day60 = day1 * 60;
  // const afterDay1 = new Date(currentTime.getTime() + day1);
  // const afterDay60 = new Date(currentTime.getTime() + day60);

  if (typeof window === 'undefined') {
    const { cookies } = await import('next/headers');
    const cookieStore = cookies();
    cookieStore.set(AUTH_KEYS.accessToken, accessToken, {
      expires: afterDay60,
    });
    cookieStore.set(AUTH_KEYS.refreshToken, refreshToken, {
      expires: afterDay60,
    });
    cookieStore.set(AUTH_KEYS.accessTokenExpireTime, String(afterDay1.getTime()), {
      expires: afterDay1,
    });

    cookieStore.set(AUTH_KEYS.userId, '' + userId, {
      expires: afterDay60,
    });
  } else {
    setLocalCookie(AUTH_KEYS.accessToken, accessToken, {
      expires: afterDay60,
    });
    setLocalCookie(AUTH_KEYS.refreshToken, refreshToken, {
      expires: afterDay60,
    });
    setLocalCookie(AUTH_KEYS.userId, '' + userId, {
      expires: afterDay60,
    });
    setLocalCookie(AUTH_KEYS.accessTokenExpireTime, String(afterDay1.getTime()), {
      expires: afterDay1,
    });
  }
};

export const hasToken = () => {
  const accessToken = getLocalCookie(AUTH_KEYS.accessToken);
  const refreshToken = getLocalCookie(AUTH_KEYS.refreshToken);

  return accessToken || refreshToken;
};

export const removeToken = async () => {
  // setTokenAtCookie({ accessToken: '', refreshToken: '', userId: 0 });
  removeLocalCookie(AUTH_KEYS.accessToken);
  removeLocalCookie(AUTH_KEYS.refreshToken);
  removeLocalCookie(AUTH_KEYS.accessTokenExpireTime);
};
