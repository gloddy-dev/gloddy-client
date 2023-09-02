import { useEffect, useRef } from 'react';

const useIntersection = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const target = useRef(null);

  useEffect(() => {
    if (!target.current) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target.current);
    return () => observer.disconnect();
  }, [callback, options]);

  return target;
};

export default useIntersection;
