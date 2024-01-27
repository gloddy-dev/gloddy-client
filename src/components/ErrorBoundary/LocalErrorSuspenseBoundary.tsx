'use client';
import BaseError from '../Error/BaseError';
import { Loading } from '../Loading';
import { StrictPropsWithChildren } from '@/types';
import { PropsWithChildren, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface LocalErrorSuspenseBoundaryProps {}
export default function LocalErrorSuspenseBoundaryBoundary({
  children,
}: StrictPropsWithChildren<LocalErrorSuspenseBoundaryProps>) {
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
