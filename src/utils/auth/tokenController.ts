import { getLocalCookie, setLocalCookie } from '../cookieController';
import { afterDay1, afterDay60 } from '../date';
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
