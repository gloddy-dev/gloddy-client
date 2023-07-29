import { Hydrate, QueryClient, dehydrate } from '@tanstack/react-query';
import { cache } from 'react';

import type { StrictPropsWithChildren } from '@/types';
import type { QueryFunction, QueryKey } from '@tanstack/react-query';

type HydrationProviderProps = {
  queryKey: QueryKey;
  queryFn: QueryFunction;
};

export const HydrationProvider = async ({
  children,
  queryKey,
  queryFn,
}: StrictPropsWithChildren<HydrationProviderProps>) => {
  const getQueryClient = cache(() => new QueryClient());

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(queryKey, queryFn);
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};
