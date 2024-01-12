/* eslint-disable react/jsx-no-useless-fragment */
'use client';

import { useToast } from '@/hooks/useModal';
import * as Sentry from '@sentry/nextjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { StrictPropsWithChildren } from '@/types';

export default function QueryProvider({ children }: StrictPropsWithChildren) {
  const { openToast } = useToast();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60,
      },
      mutations: {
        onError: (error) => {
          const errorMessage =
            typeof error === 'string' ? error : '오류가 발생했습니다. 다시 시도해주세요.';
          openToast(errorMessage);
        },
      },
    },
    logger: {
      log: (message) => {
        Sentry.captureMessage(message);
      },
      warn: (message) => {
        Sentry.captureMessage(message);
      },
      error: (error) => {
        Sentry.captureException(error);
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
