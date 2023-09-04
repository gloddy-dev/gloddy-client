import { postReissue } from '@/apis/auth';
import { AUTH_KEYS } from '@/constants/token';
import { getTokenFromCookie } from '@/utils/auth/tokenController';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

interface HomeProps {
  params: {
    lng: string;
  };
}

export default async function Home({ params: { lng } }: HomeProps) {
  const { accessToken, refreshToken } = (await getTokenFromCookie()) as {
    accessToken: string;
    refreshToken: string;
  };

  if (accessToken && refreshToken) return redirect(`/${lng}/grouping`);

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

    redirect(`/${lng}/grouping`);
  } catch (e) {
    console.log(e);
    return redirect(`/${lng}/join`);
  }
}
