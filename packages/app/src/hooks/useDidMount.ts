import { useEffect, useRef } from 'react';

export default function useDidMount(callback: () => void) {
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    callback();
    return () => {
      mounted.current = false;
    };
  }, []);
}
