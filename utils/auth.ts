import { AUTH_KEYS } from '@/constants/token';

import type { CookieKeyType } from '@/types';

const generateCookiesKeyValues = ({ accessToken, refreshToken, userId }: CookieKeyType) => {
  const accessTokenExpireDate = new Date();

  return [
    [AUTH_KEYS.accessToken, accessToken],
    [AUTH_KEYS.refreshToken, refreshToken],
    [AUTH_KEYS.userId, userId],
    [AUTH_KEYS.accessTokenExpireDate, accessTokenExpireDate.getTime()],
  ];
};

const getAuthTokensByCookie = (cookieString: string): Partial<CookieKeyType> => {
  const auth: Partial<CookieKeyType> = {};
  for (const cookie of cookieString.split('; ')) {
    const [key, value] = cookie.split('=');
    if (key === AUTH_KEYS.accessToken) {
      auth.accessToken = value;
    } else if (key === AUTH_KEYS.refreshToken) {
      auth.refreshToken = value;
    } else if (key === AUTH_KEYS.userId) {
      auth.userId = +value;
    }
  }
  return auth;
};

const ACCESS_TOKEN_EXPIRE_MARGIN_SECOND = 60;
export { ACCESS_TOKEN_EXPIRE_MARGIN_SECOND, generateCookiesKeyValues, getAuthTokensByCookie };
