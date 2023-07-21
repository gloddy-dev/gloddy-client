import { Hydrate, QueryClient, dehydrate } from '@tanstack/react-query';
import { type QueryFunction, QueryKey } from '@tanstack/react-query';
import { PropsWithChildren, cache } from 'react';

type HydrationProviderProps = {
  queryKey: QueryKey;
  queryFn: QueryFunction;
};

export const HydrationProvider = async ({
  children,
  queryKey,
  queryFn,
}: PropsWithChildren<HydrationProviderProps>) => {
  const getQueryClient = cache(() => new QueryClient());

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(queryKey, queryFn);
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};
