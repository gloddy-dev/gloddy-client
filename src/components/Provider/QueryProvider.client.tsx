/* eslint-disable react/jsx-no-useless-fragment */
'use client';

import { Toast } from '@/components/Modal';
import { useModal } from '@/hooks/useModal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

import type { StrictPropsWithChildren } from '@/types';

export default function QueryProvider({ children }: StrictPropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());
  const { open } = useModal({ delay: 2000 });

  queryClient.setDefaultOptions({
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: (error) => {
        const errorMessage =
          typeof error === 'string' ? error : '오류가 발생했습니다. 다시 시도해주세요.';
        open(() => (
          <Toast>
            <>{errorMessage}</>
          </Toast>
        ));
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} panelPosition="top" />
    </QueryClientProvider>
  );
}
