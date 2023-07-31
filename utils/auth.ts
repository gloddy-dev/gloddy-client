import { AUTH_COOKIE_KEYS } from '@/apis/config/type';

type CokkieKeyType = {
  accessToken: string;
  refreshToken: string;
  userId: number;
};
const generateCookiesKeyValues = ({ accessToken, refreshToken, userId }: CokkieKeyType) => {
  const accessTokenExpireDate = new Date();

  return [
    [AUTH_COOKIE_KEYS.accessToken, accessToken],
    [AUTH_COOKIE_KEYS.refreshToken, refreshToken],
    [AUTH_COOKIE_KEYS.userId, userId],
    [AUTH_COOKIE_KEYS.accessTokenExpireDate, accessTokenExpireDate.getTime()],
  ];
};

const getAuthTokensByCookie = (cookieString: string): Partial<CokkieKeyType> => {
  const auth: Partial<CokkieKeyType> = {};
  for (const cookie of cookieString.split('; ')) {
    const [key, value] = cookie.split('=');
    if (key === AUTH_COOKIE_KEYS.accessToken) {
      auth.accessToken = value;
    } else if (key === AUTH_COOKIE_KEYS.refreshToken) {
      auth.refreshToken = value;
    } else if (key === AUTH_COOKIE_KEYS.userId) {
      auth.userId = +value;
    }
  }
  return auth;
};

const ACCESS_TOKEN_EXPIRE_MARGIN_SECOND = 60;
export { ACCESS_TOKEN_EXPIRE_MARGIN_SECOND, generateCookiesKeyValues, getAuthTokensByCookie };
