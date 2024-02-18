'use client';

import { useRouter } from 'next/navigation';

import { removeToken } from '@/utils';

export default function useLogout() {
  const router = useRouter();

  const logout = () => {
    removeToken();

    router.push('/join');
  };

  return { logout };
}
