import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { useEffect } from 'react';

export interface BaseErrorProps {
  error: Error;
  reset: () => void;
}

export default function BaseError({ error, reset }: BaseErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Flex align="center" justify="center" className="h-full text-sign-tertiary " direction="column">
      <p className="text-30 flex h-48 w-48 items-center justify-center rounded-full bg-sign-caption text-white">
        X
      </p>
      <Spacing size={20} />
      <p className="text-center text-subtitle-1">
        오류가 발생했습니다.
        <br />
        잠시 후 다시 시도해 주세요.
      </p>
      <p>{error.message}</p>
      <button
        className="bg-grey-200 text-13 mt-16 block rounded-lg px-12 py-8 font-bold"
        onClick={reset}
      >
        다시 불러오기
      </button>
    </Flex>
  );
}
