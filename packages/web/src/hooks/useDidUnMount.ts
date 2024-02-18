'use client';

import { useEffect } from 'react';

export default function useDidUnMount(callback: VoidFunction) {
  useEffect(() => {
    return () => {
      callback();
    };
  }, []);
}
