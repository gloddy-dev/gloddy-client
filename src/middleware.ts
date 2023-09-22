import { postReissue } from './apis/auth';
import { cookieName, fallbackLng, languages } from './app/i18n/settings';
import { AUTH_KEYS } from './constants/token';
import { afterDay1, afterDay60 } from './utils/date';
import { type NextRequest, NextResponse } from 'next/server';

const PRIVATE_PAGE = /(grouping|meeting|profile)/;

const PUBLIC_FILE = /\.(.*)$/;

const setReissueToken = async (request: NextRequest, response: NextResponse) => {
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

      response.cookies.set(AUTH_KEYS.accessToken, reIssuedAccessToken, {
        expires: afterDay60,
      });
      response.cookies.set(AUTH_KEYS.refreshToken, reIssuedRefreshToken, {
        expires: afterDay60,
      });
      response.cookies.set(AUTH_KEYS.accessTokenExpireTime, String(afterDay1.getTime()), {
        expires: afterDay1,
      });
    } catch (e) {
      return NextResponse.redirect(new URL('/join', request.nextUrl.origin));
    }
  }
};

const middleware = async (request: NextRequest) => {
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  )
    return;

  if (
    request.nextUrl.pathname.indexOf('icon') > -1 ||
    request.nextUrl.pathname.indexOf('chrome') > -1
  )
    return NextResponse.next();

  const cookieLng = request.cookies.get(cookieName)?.value;

  /* 새로운 페이지 접속 시 */
  if (
    !languages.some((lng: string) => request.nextUrl.pathname.startsWith(`/${lng}`)) &&
    !request.nextUrl.pathname.startsWith('/_next')
  ) {
    const searchParams = request.nextUrl.searchParams.toString();

    const response = NextResponse.redirect(
      new URL(
        `/${cookieLng || fallbackLng}${request.nextUrl.pathname}${
          searchParams ? `?${searchParams}` : ''
        }`,
        request.url
      )
    );

    if (!cookieLng) {
      response.cookies.set(cookieName, fallbackLng, {
        expires: afterDay60,
      });
    }

    if (PRIVATE_PAGE.test(request.nextUrl.pathname)) {
      await setReissueToken(request, response);
    }

    return response;
  }

  return NextResponse.next();
};

const config = {
  matcher: ['/'],
};

export { config, middleware };
