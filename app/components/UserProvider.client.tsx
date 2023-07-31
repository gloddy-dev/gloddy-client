'use client';
import { useReissueMutation } from '@/apis/auth';
import LoadingHandler from '@/components/common/LoadingHandler';
import { localStorageUserTokenKeys } from '@/constants/localStorage';
import useDidMount from '@/hooks/common/useDidMount/useDidMount';
import { useUser } from '@/hooks/useUser';
import { StrictPropsWithChildren } from '@/types';
import { useRouter } from 'next/navigation';

export function UserProvider({ children }: StrictPropsWithChildren) {
  const router = useRouter();
  const { isLoaded, setIsLoaded, userLogin, userLogout } = useUser();

  const { mutate: mutateReissue } = useReissueMutation();

  useDidMount(() => {
    if (isLoaded) return;

    const storedAccessToken = localStorage.getItem(localStorageUserTokenKeys.accessToken) ?? '';
    const storedRefreshToken = localStorage.getItem(localStorageUserTokenKeys.refreshToken);

    if (storedRefreshToken) {
      mutateReissue(
        {
          accessToken: storedAccessToken,
          refreshToken: storedRefreshToken,
        },
        {
          onSuccess: (data) => {
            const { token } = data;
            userLogin(token);
            setIsLoaded(true);
          },
          onError: () => {
            userLogout();
            router.push('/');
            setIsLoaded(true);
          },
        }
      );
    } else {
      setIsLoaded(true);
    }
  });

  return <>{children}</>;
}
