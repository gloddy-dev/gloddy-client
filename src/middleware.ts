import { postReissue } from './apis/auth';
import { AUTH_KEYS } from './constants/token';
import { afterDay1, afterDay60 } from './utils/date';
import { type NextRequest, NextResponse } from 'next/server';

const PRIVATE_PAGE = /\/(?:en|ko)\/(grouping|meeting|profile)/;

const PUBLIC_FILE = /\.(.*)$/;

const middleware = async (request: NextRequest) => {
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }
  const pathname = request.nextUrl.pathname;
  if (PRIVATE_PAGE.test(pathname)) {
    const accessToken = request.cookies.get(AUTH_KEYS.accessToken)?.value as string;
    const refreshToken = request.cookies.get(AUTH_KEYS.refreshToken)?.value as string;
    const accessTokenExpireTime = request.cookies.get(AUTH_KEYS.accessTokenExpireTime)
      ?.value as string;
    if (!accessTokenExpireTime) {
      try {
        const {
          token: { accessToken: reIssuedAccessToken, refreshToken: reIssuedRefreshToken },
        } = await postReissue(
          { accessToken, refreshToken },
          { headers: { 'X-AUTH-TOKEN': accessToken } }
        );
        const response = NextResponse.next();

        response.cookies.set(AUTH_KEYS.accessToken, reIssuedAccessToken, {
          expires: afterDay60,
        });

        response.cookies.set(AUTH_KEYS.accessTokenExpireTime, String(afterDay1.getTime()), {
          expires: afterDay1,
        });

        response.cookies.set(AUTH_KEYS.refreshToken, reIssuedRefreshToken, {
          expires: afterDay60,
        });

        console.log('token reissued');
        return response;
      } catch (e) {
        return NextResponse.redirect(new URL('/join', request.nextUrl.origin));
      }
    }
  }

  return NextResponse.next();
};

const config = {
  matcher: ['/'],
};

export { config, middleware };
