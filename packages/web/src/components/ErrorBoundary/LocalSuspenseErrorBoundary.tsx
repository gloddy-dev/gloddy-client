'use client';
import { PropsWithChildren, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import BaseError from '../Error/BaseError';
import { Loading } from '../Loading';

import { StrictPropsWithChildren } from '@/types';

interface LocalSuspenseErrorBoundaryProps {}
export default function LocalSuspenseErrorBoundary({
  children,
}: StrictPropsWithChildren<LocalSuspenseErrorBoundaryProps>) {
  return (
    <ErrorBoundary fallbackRender={Fallback}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}

interface FallbackProps {
  error: Error;
  resetErrorBoundary: (...args: unknown[]) => void;
}

export function Fallback({ error, resetErrorBoundary }: PropsWithChildren<FallbackProps>) {
  return <BaseError error={error} reset={resetErrorBoundary} />;
}
