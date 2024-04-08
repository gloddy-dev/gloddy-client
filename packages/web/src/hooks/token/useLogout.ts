import { useRouter } from 'next/navigation';

import { removeToken } from '@/utils/auth/tokenController';

export default function useLogout() {
  const router = useRouter();

  const logout = async () => {
    await removeToken();

    router.push('/join');
  };

  return { logout };
}
