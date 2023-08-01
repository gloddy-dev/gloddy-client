'use client';
import { LoginResponse, useLoginMutation } from '@/apis/auth';
import { useUser } from '@/hooks/useUser';
import { getCookie } from '@/utils/cookie';

export default function Home() {
  const { userLogin } = useUser();
  const { mutate: mutateLogin } = useLoginMutation();

  const handleGetToken = () => {
    console.log(getCookie('gloddy_at'));
    mutateLogin(
      { phoneNumber: '010-5728-9357' },
      {
        onSuccess: (response: LoginResponse) => {
          if (response.existUser) {
            const {
              token: { accessToken, refreshToken },
              userId,
            } = response;
            userLogin({ accessToken, refreshToken, userId });
          }
        },
      }
    );
  };
  return (
    <main>
      <button onClick={handleGetToken}>Token 발급받기</button>
    </main>
  );
}
