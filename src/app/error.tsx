'use client';

import { Flex } from '@/components/Layout';
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
    <Flex align="center" justify="center">
      <Image src="icons/48/cancel.svg" alt="에러" width={48} height={48} />
      <p className="text-subtitle-1 text-sign-tertiary">
        오류가 발생했습니다.
        <br />
        잠시 후 다시 시도해 주세요.
      </p>
    </Flex>
  );
}
