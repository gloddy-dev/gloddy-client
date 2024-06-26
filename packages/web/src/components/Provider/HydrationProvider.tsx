import {
  HydrationBoundary,
  QueryClient,
  type QueryFunction,
  type QueryKey,
  dehydrate,
} from '@tanstack/react-query';

import type { StrictPropsWithChildren } from '@/types';

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
  const queryClient = new QueryClient();

  if (queryMultipleFn && queryMultipleKey) {
    if (isInfiniteQuery)
      await Promise.all(
        queryMultipleFn.map((queryFn, index) => {
          return queryClient.prefetchInfiniteQuery({
            queryKey: queryMultipleKey[index],
            queryFn,
            initialPageParam: 0 as never,
          });
        })
      );
    else
      await Promise.all(
        queryMultipleFn.map((queryFn, index) => {
          return queryClient.prefetchQuery({ queryKey: queryMultipleKey[index], queryFn });
        })
      );
  }

  if (queryFn && queryKey) {
    if (isInfiniteQuery)
      await queryClient.prefetchInfiniteQuery({ queryKey, queryFn, initialPageParam: 0 as never });
    else await queryClient.prefetchQuery({ queryKey, queryFn });
  }

  const dehydratedState = dehydrate(queryClient);

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
}
