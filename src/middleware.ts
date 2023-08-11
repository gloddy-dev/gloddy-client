import { postReissue } from './apis/auth';
import { AUTH_KEYS } from './constants/token';
import { type NextRequest, NextResponse } from 'next/server';

const privatePages = /^\/(grouping|meeting|profile)/;

const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  if (privatePages.test(pathname)) {
    console.log('token reissuing');
    const accessToken = request.cookies.get(AUTH_KEYS.accessToken)?.value;
    const refreshToken = request.cookies.get(AUTH_KEYS.refreshToken)?.value;

    if (!accessToken || !refreshToken)
      return NextResponse.redirect(new URL('join', request.nextUrl.origin));

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
      console.log('token reissued');
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
