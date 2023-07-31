import { generateCookiesKeyValues } from '../auth';
import { postReissue } from '@/apis/auth';
import { ApiError } from '@/apis/config/customError';
import { CookieKeyType } from '@/types';
import { cookies } from 'next/headers';

export const getAccessTokenServer = async (
  authTokens: CookieKeyType
): Promise<string | null | ApiError> => {
  try {
    const { accessToken, refreshToken, userId } = authTokens;
    if (accessToken && refreshToken) {
      const response = await postReissue({ accessToken, refreshToken });
      if (
        response.token.accessToken === undefined ||
        response.token.refreshToken === undefined ||
        userId === undefined
      ) {
        return null;
      }
      const cookieStore = cookies();
      for (const [cookieKey, cookieValue] of generateCookiesKeyValues({
        accessToken: response.token.accessToken,
        refreshToken: response.token.refreshToken,
        userId,
      })) {
        cookieStore.set(cookieKey as string, cookieValue as string);
      }

      return response.token.accessToken;
    } else {
      return null;
    }
  } catch (e) {
    return e as ApiError;
  }
};
