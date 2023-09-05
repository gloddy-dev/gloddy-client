import { Hydrate, QueryClient, dehydrate } from '@tanstack/react-query';
import { cache } from 'react';

import type { StrictPropsWithChildren } from '@/types';
import type { QueryFunction, QueryKey } from '@tanstack/react-query';

interface HydrationProviderProps {
  queryKey?: QueryKey;
  queryMultipleKey?: QueryKey[];
  queryFn?: QueryFunction;
  queryMultipleFn?: QueryFunction[];
  isInfiniteQuery?: boolean;
}

export default async function HydrationProvider({
  children,
  queryKey,
  queryMultipleKey,
  queryFn,
  queryMultipleFn,
  isInfiniteQuery = false,
}: StrictPropsWithChildren<HydrationProviderProps>) {
  const getQueryClient = cache(() => new QueryClient());

  const queryClient = getQueryClient();

  if (queryMultipleFn && queryMultipleKey) {
    queryMultipleFn.forEach(async (queryFn, index) => {
      await queryClient.prefetchQuery(queryMultipleKey[index], queryFn);
    });
  }
  if (queryFn && queryKey) {
    if (isInfiniteQuery) await queryClient.prefetchInfiniteQuery(queryKey, queryFn);
    else await queryClient.prefetchQuery(queryKey, queryFn);
  }

  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
}
