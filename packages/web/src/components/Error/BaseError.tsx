import { useEffect } from 'react';

import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import useLogout from '@/hooks/token/useLogout';

export interface BaseErrorProps {
  error: Error;
  reset: () => void;
}

export default function BaseError({ error, reset }: BaseErrorProps) {
  const { logout } = useLogout();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Flex align="center" justify="center" className="text-sign-tertiary h-full " direction="column">
      <p className="text-30 bg-sign-caption flex h-48 w-48 items-center justify-center rounded-full text-white">
        X
      </p>
      <Spacing size={20} />
      <p className="text-subtitle-1 text-center">
        오류가 발생했습니다.
        <br />
        잠시 후 다시 시도해 주세요.
      </p>
      <button
        className="bg-grey-200 text-13 mt-16 block rounded-lg px-12 py-8 font-bold"
        onClick={reset}
      >
        다시 불러오기
      </button>
      <button
        className="bg-grey-200 text-13 mt-16 block rounded-lg px-12 py-8 font-bold text-red-300"
        onClick={logout}
      >
        로그아웃하기
      </button>
    </Flex>
  );
}
