import { localStorageUserTokenKeys } from '@/constants/localStorage';
import { generateCookiesKeyValues } from '@/utils/auth';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

const GLODDY_RT = 'GLODDY_RT';

export function useUser() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const router = useRouter();

  const queryClient = useQueryClient();

  const postRefreshTokenReactNativeWebView = (refreshToken: string) => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: GLODDY_RT, data: refreshToken })
      );
    }
  };

  /**
   * 유저 로그인 시에 사용합니다.
   * @param accessToken 엑세스 토큰 값
   * @param refreshToken 리프레시 토큰 값
   */

  const userLogin = useCallback(
    ({
      accessToken,
      refreshToken,
      userId,
    }: {
      accessToken: string;
      refreshToken: string;
      userId: number;
    }) => {
      if (
        accessToken === undefined ||
        refreshToken === undefined ||
        accessToken === '' ||
        refreshToken === ''
      ) {
        throw Error('로그인 토큰이 올바르지 않습니다.');
      }
      for (const [cookieKey, cookieValue] of generateCookiesKeyValues({
        accessToken,
        refreshToken,
        userId,
      })) {
        document.cookie = `${cookieKey}=${cookieValue}; path=/;`;
      }
      postRefreshTokenReactNativeWebView(refreshToken);
      queryClient.clear();
    },
    [queryClient]
  );
  const userLogout = () => {
    localStorage.removeItem(localStorageUserTokenKeys.accessToken);
    localStorage.removeItem(localStorageUserTokenKeys.refreshToken);
    postRefreshTokenReactNativeWebView('');
    queryClient.clear();
    router.push('/login');
  };
  return {
    isLoaded,
    setIsLoaded,
    userLogin,
    userLogout,
  };
}
