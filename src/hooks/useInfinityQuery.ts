import { useCallback, useEffect, useRef } from 'react';

import type { FetchNextPageOptions, InfiniteQueryObserverResult } from '@tanstack/react-query';

const useIntersect = (
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult>,
  options?: IntersectionObserverInit
) => {
  const target = useRef(null);

  const onIntersect = useCallback(
    async (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        await fetchNextPage();
        observer.observe(entry.target);
      }
    },
    [fetchNextPage]
  );

  useEffect(() => {
    if (!target.current) return;
    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(target.current);
    return () => observer.disconnect();
  }, [onIntersect, options]);

  return target;
};

export default useIntersect;
