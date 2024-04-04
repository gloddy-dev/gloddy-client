import { type NextRequest, NextResponse } from 'next/server';

import { postReissue } from './apis/auth';
import { cookieName, languages } from './app/i18n/settings';
import { AUTH_KEYS } from './constants/token';

const privatePages = /\/(?:en|ko|zh-CN|zh-TW)\/(grouping|meeting|profile|community)/;

const excludePages = [
  /\/(?:en|ko|zh-CN|zh-TW)\/profile\/setting\/information/,
  /\/(?:en|ko|zh-CN|zh-TW)\/profile\/setting\/service/,
  /\/(?:en|ko|zh-CN|zh-TW)\/notification/,
];

const isPrivatePage = (path: string) =>
  !excludePages.some((it) => it.test(path)) && privatePages.test(path);

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

  const lng = request.cookies.get(cookieName)?.value || 'en';

  /* 새로운 페이지 접속 시 */
  if (
    !languages.some((loc: string) => request.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !request.nextUrl.pathname.startsWith('/_next')
  ) {
    const searchParams = request.nextUrl.searchParams.toString();
    return NextResponse.redirect(
      new URL(
        `/${lng}${request.nextUrl.pathname}${searchParams ? `?${searchParams}` : ''}`,
        request.url
      )
    );
  }

  const response = NextResponse.next();

  if (isPrivatePage(pathname)) {
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

        const currentTime = new Date();
        const day1 = 1000 * 60 * 60 * 24;
        const day60 = day1 * 60;
        const afterDay1 = new Date(currentTime.getTime() + day1);
        const afterDay60 = new Date(currentTime.getTime() + day60);

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
      } catch (e) {
        return NextResponse.redirect(new URL('/join', request.nextUrl.origin));
      }
    }
  }

  if (
    request.nextUrl.pathname.indexOf('icon') > -1 ||
    request.nextUrl.pathname.indexOf('chrome') > -1
  )
    return NextResponse.next();

  return response;
};

const config = {
  matcher: ['/:path*'],
};

export { config, middleware };
