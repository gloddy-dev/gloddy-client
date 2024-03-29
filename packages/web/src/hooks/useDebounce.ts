import { useEffect, useState } from 'react';

interface UseDebounceProps<T> {
  target: T;
  delay: number;
}

const useDebounce = <T>({ target, delay }: UseDebounceProps<T>) => {
  const [debouncedValue, setDebouncedValue] = useState(target);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(target);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [target]);

  return debouncedValue;
};

export default useDebounce;
