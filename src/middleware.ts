import { postReissue } from './apis/auth';
import { cookieName, fallbackLng, languages } from './app/i18n/settings';
import { AUTH_KEYS } from './constants/token';
import acceptLanguage from 'accept-language';
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
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60 + 9 * 60 * 60 * 1000),
      });
      response.cookies.set(AUTH_KEYS.refreshToken, reIssuedRefreshToken, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60 + 9 * 60 * 60 * 1000),
      });
    } catch (e) {
      console.log(e);
      return NextResponse.redirect(new URL('/join', request.nextUrl.origin));
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
    return NextResponse.redirect(new URL(`/${lng}${request.nextUrl.pathname}`, request.url));
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
