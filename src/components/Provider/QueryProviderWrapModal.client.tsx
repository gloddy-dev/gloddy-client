'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

import type { StrictPropsWithChildren } from '@/types';

export default function QueryProviderWrapModal({ children }: StrictPropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  queryClient.setDefaultOptions({
    queries: {
      retry: 1,
    },
    mutations: {
      onError: (error) => {
        console.log(error);
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
