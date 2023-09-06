'use client';

import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import Image from 'next/image';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Flex align="center" justify="center" className="h-full" direction="column">
      <p className="flex h-48 w-48 items-center justify-center rounded-full bg-sign-caption text-30 text-white">
        X
      </p>
      <Spacing size={20} />
      <p className="text-subtitle-1 text-sign-tertiary">
        오류가 발생했습니다.
        <br />
        잠시 후 다시 시도해 주세요.
      </p>
    </Flex>
  );
}
