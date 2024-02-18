'use client';

import { useEffect, useRef } from 'react';

export default function useDidMount(callback: VoidFunction) {
  const didMountRef = useRef<boolean>(false);

  useEffect(() => {
    if (didMountRef.current) return;
    didMountRef.current = true;
    callback();
  }, []);
}
