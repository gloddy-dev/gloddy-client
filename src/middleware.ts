import { postReissue } from './apis/auth';
import { cookieName, fallbackLng, languages } from './app/i18n/settings';
import { AUTH_KEYS } from './constants/token';
import { afterDay1, afterDay60 } from './utils/date';
import acceptLanguage from 'accept-language';
import { type NextRequest, NextResponse } from 'next/server';

const PRIVATE_PAGE = /^\/(grouping|meeting|profile)/;

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
    if (!accessTokenExpireTime || Number(accessTokenExpireTime) < new Date().getTime()) {
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
          expires: afterDay60,
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

  if (
    request.nextUrl.pathname.indexOf('icon') > -1 ||
    request.nextUrl.pathname.indexOf('chrome') > -1
  )
    return NextResponse.next();
  let lng;
  if (request.cookies.has(cookieName))
    lng = acceptLanguage.get(request.cookies.get(cookieName)?.value);
  if (!lng) lng = acceptLanguage.get(request.headers.get('Accept-Language'));
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc: string) => request.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !request.nextUrl.pathname.startsWith('/_next')
  ) {
    console.log('redirect');
    const searchParams = request.nextUrl.searchParams.toString();
    return NextResponse.redirect(
      new URL(
        `/${lng}${request.nextUrl.pathname}${searchParams ? `?${searchParams}` : ''}`,
        request.url
      )
    );
  }

  if (request.headers.has('referer')) {
    const refererUrl = new URL(request.headers.get('referer')!);
    const lngInReferer = languages.find((l: string) => refererUrl.pathname.startsWith(`/${l}`));
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
};

const config = {
  matcher: ['/'],
};

export { config, middleware };
