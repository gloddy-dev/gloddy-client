import { postReissue } from '@/apis/auth';
import { AUTH_KEYS } from '@/constants/token';
import { getTokenFromCookie } from '@/utils/auth/tokenController';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export default async function Home() {
  const { accessToken, refreshToken } = (await getTokenFromCookie()) as {
    accessToken: string;
    refreshToken: string;
  };

  if (accessToken && refreshToken) return redirect('/grouping');

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

    redirect('/grouping');
  } catch (e) {
    console.log(e);
    return redirect('/join');
  }
}