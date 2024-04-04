'use client';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from './ErrorFallback';
import { Loading } from '../Loading';

import { StrictPropsWithChildren } from '@/types';

export default function LocalSuspenseErrorBoundary({ children }: StrictPropsWithChildren) {
  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
