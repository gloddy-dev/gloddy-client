'use client';

import { LoginResponse, postReissue, useLoginMutation } from '@/apis/auth';
import { getTokenFromCookie, setTokenAtCookie } from '@/utils/auth/tokenController';

export default function Token() {
  const { mutate: mutateLogin } = useLoginMutation();

  const handlegetTokenFromCookie = async () => {
    mutateLogin(
      { phoneNumber: '010 - 2018 - 0262' },
      {
        onSuccess: (response: LoginResponse) => {
          if (response.existUser) {
            const {
              token: { accessToken, refreshToken },
              userId,
            } = response;
            setTokenAtCookie({
              accessToken,
              refreshToken,
              userId,
            });
          }
        },
      }
    );
  };

  const handleGetReissue = async () => {
    const { accessToken, refreshToken } = await getTokenFromCookie();
    if (!accessToken || !refreshToken) return;
    const response = await postReissue(
      {
        accessToken,
        refreshToken,
      },
      { headers: { 'X-AUTH-TOKEN': accessToken } }
    );
    console.log(response);
  };
  return (
    <div>
      <button onClick={handlegetTokenFromCookie}>Token 발급받기</button>
      <button onClick={handleGetReissue}>Reissue</button>
    </div>
  );
}
