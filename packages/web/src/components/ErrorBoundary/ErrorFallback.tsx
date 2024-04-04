'use client';
import { PropsWithChildren } from 'react';

import BaseError from '../Error/BaseError';

interface FallbackProps {
  error: Error;
  resetErrorBoundary: (...args: unknown[]) => void;
}

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: PropsWithChildren<FallbackProps>) {
  return <BaseError error={error} reset={resetErrorBoundary} />;
}
