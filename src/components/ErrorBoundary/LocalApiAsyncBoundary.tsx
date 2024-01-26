'use client';
import BaseError from '../Error/BaseError';
import { Loading } from '../Loading';
import { StrictPropsWithChildren } from '@/types';
import { captureException } from '@sentry/nextjs';
import { PropsWithChildren, Suspense, useCallback, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface LocalApiAsyncBoundaryProps {}
export default function LocalApiAsyncBoundary({
  children,
}: StrictPropsWithChildren<LocalApiAsyncBoundaryProps>) {
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
  console.log(error);
  useEffect(() => {
    captureException(new Error('LocalApiAsyncBoundary'));
  }, []);
  return (
    <BaseError
      error={error}
      reset={useCallback(() => resetErrorBoundary(), [resetErrorBoundary])}
    />
  );
}
