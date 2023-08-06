import { postReissue } from './apis/auth';
import { AUTH_KEYS } from './constants/token';
import { NextRequest, NextResponse } from 'next/server';

const middleware = async (request: NextRequest) => {
  const accessToken = request.cookies.get(AUTH_KEYS.accessToken)?.value;
  const refreshToken = request.cookies.get(AUTH_KEYS.refreshToken)?.value;

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
  } else {
    return NextResponse.redirect(new URL('join', request.nextUrl.origin));
  }
};

const config = {
  matcher: ['/grouping', '/meeting', '/profile'],
};
export { config, middleware };
