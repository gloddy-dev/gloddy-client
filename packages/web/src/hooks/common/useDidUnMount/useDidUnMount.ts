import { useEffect } from 'react';

const useDidUnMount = (callback: VoidFunction) => {
  useEffect(() => {
    return () => {
      callback();
    };
  }, []);
};

export default useDidUnMount;
