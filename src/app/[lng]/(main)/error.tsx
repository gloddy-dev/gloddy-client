'use client';

import BaseError, { BaseErrorProps } from '@/components/Error/BaseError';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/Footer/Footer.server'), { ssr: false });

interface ErrorProps extends BaseErrorProps {}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <>
      <BaseError error={error} reset={reset} />
      <Footer lng="ko" />
    </>
  );
}
