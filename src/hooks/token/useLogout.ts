import { removeToken } from '@/utils/auth/tokenController';
import { useRouter } from 'next/navigation';

export default function useLogout() {
  const router = useRouter();

  const logout = () => {
    router.push('/join');
    removeToken();
  };

  return { logout };
}
