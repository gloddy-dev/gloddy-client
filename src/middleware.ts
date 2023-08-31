import { postReissue } from './apis/auth';
import { AUTH_KEYS } from './constants/token';
import { type NextRequest, NextResponse } from 'next/server';

const privatePages = /^\/(grouping|meeting|profile)/;

const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  if (privatePages.test(pathname)) {
    console.log('token reissuing');
    const accessToken = request.cookies.get(AUTH_KEYS.accessToken)?.value as string;
    const refreshToken = request.cookies.get(AUTH_KEYS.refreshToken)?.value as string;

    try {
      const {
        token: { accessToken: reIssuedAccessToken, refreshToken: reIssuedRefreshToken },
      } = await postReissue(
        { accessToken, refreshToken },
        { headers: { 'X-AUTH-TOKEN': accessToken } }
      );
      const response = NextResponse.next();
      response.cookies.set(AUTH_KEYS.accessToken, reIssuedAccessToken, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 + 9 * 60 * 60 * 1000),
      });
      response.cookies.set(AUTH_KEYS.refreshToken, reIssuedRefreshToken, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60 + 9 * 60 * 60 * 1000),
      });

      return response;
    } catch (e) {
      console.log(e);
      return NextResponse.redirect(new URL('/join', request.nextUrl.origin));
    }
  }
};

const config = {
  matcher: ['/'],
};

export { config, middleware };
