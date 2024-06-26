'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

import type { StrictPropsWithChildren } from '@/types';

import useToast from '@/hooks/useModal/useToast';

export default function QueryProvider({ children }: StrictPropsWithChildren) {
  const { openToast } = useToast();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            throwOnError: true,
            staleTime: 60 * 1000,
          },
          mutations: {
            onError: (error) => {
              const errorMessage =
                typeof error === 'string' ? error : '오류가 발생했습니다. 다시 시도해주세요.';
              openToast(errorMessage);
            },
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
