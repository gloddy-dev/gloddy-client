'use client';
import { LoginResponse, useLoginMutation } from '@/apis/auth';
import { setTokenAtCookie } from '@/utils/auth/tokenController';

export default function Home() {
  const { mutate: mutateLogin } = useLoginMutation();

  const handlegetTokenFromCookie = () => {
    mutateLogin(
      { phoneNumber: '010-5728-9357' },
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
  return (
    <main>
      <button onClick={handlegetTokenFromCookie}>Token 발급받기</button>
    </main>
  );
}
