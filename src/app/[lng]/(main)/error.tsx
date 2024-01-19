'use client';

import BaseError, { BaseErrorProps } from '@/components/Error/BaseError';
import { Footer } from '@/components/Footer';

interface ErrorProps extends BaseErrorProps {}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <>
      <BaseError error={error} reset={reset} />
      <Footer lng="ko" />
    </>
  );
}
