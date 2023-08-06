import { postReissue } from './apis/auth';
import { AUTH_KEYS } from './constants/token';
import { NextRequest, NextResponse } from 'next/server';

const privatePages = /^\/(grouping|meeting|profile)/;

const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const accessToken = request.cookies.get(AUTH_KEYS.accessToken)?.value;
  const refreshToken = request.cookies.get(AUTH_KEYS.refreshToken)?.value;

  if (privatePages.test(pathname)) {
    if (accessToken && refreshToken) {
      try {
        const {
          token: { accessToken: reIssuedAccessToken, refreshToken: reIssuedRefreshToken },
        } = await postReissue(
          { accessToken, refreshToken },
          { headers: { 'X-AUTH-TOKEN': accessToken } }
        );
        const response = NextResponse.next();
        response.cookies.set(AUTH_KEYS.accessToken, reIssuedAccessToken);
        response.cookies.set(AUTH_KEYS.refreshToken, reIssuedRefreshToken);
        return response;
      } catch (e) {
        console.log(e);
        return NextResponse.redirect(new URL('/join', request.nextUrl.origin));
      }
    } else if (!accessToken) {
      return NextResponse.redirect(new URL('join', request.nextUrl.origin));
    }
  }
};

const config = {
  // middleware가 적용될 페이지를 설정해 두어야 SC에서의 api 요청이 정상적으로 작동합니다.
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/'],
};
export { config, middleware };
