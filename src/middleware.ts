import { postReissue } from './apis/auth';
import { AUTH_KEYS } from './constants/token';
import { oneDay } from './utils/date';
import { type NextRequest, NextResponse } from 'next/server';

const privatePages = /^\/(grouping|meeting|profile)/;

const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  if (privatePages.test(pathname)) {
    const accessToken = request.cookies.get(AUTH_KEYS.accessToken)?.value as string;
    const refreshToken = request.cookies.get(AUTH_KEYS.refreshToken)?.value as string;
    const accessTokenExpireTime = request.cookies.get(AUTH_KEYS.accessTokenExpireTime)
      ?.value as string;

    if (!accessTokenExpireTime || Number(accessTokenExpireTime) < new Date().getTime()) {
      try {
        const {
          token: { accessToken: reIssuedAccessToken, refreshToken: reIssuedRefreshToken },
        } = await postReissue(
          { accessToken, refreshToken },
          { headers: { 'X-AUTH-TOKEN': accessToken } }
        );
        const response = NextResponse.next();

        response.cookies.set(AUTH_KEYS.accessToken, reIssuedAccessToken);

        response.cookies.set(
          AUTH_KEYS.accessTokenExpireTime,
          String(new Date().getTime() + oneDay)
        );

        response.cookies.set(AUTH_KEYS.refreshToken, reIssuedRefreshToken);

        console.log('token reissued');
        return response;
      } catch (e) {
        alert('로그인이 필요합니다.');
        return NextResponse.redirect(new URL('/join', request.nextUrl.origin));
      }
    }
  }
};

const config = {
  matcher: ['/'],
};

export { config, middleware };
