'use client';

import { useEffect } from 'react';

export default function useDisableScrollBounce() {
  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      if (document.body.clientHeight > document.body.scrollHeight - document.body.scrollTop) {
        event.preventDefault();
      }
    };

    document.body.addEventListener('touchmove', handleTouchMove, false);

    return () => {
      document.body.removeEventListener('touchmove', handleTouchMove, false);
    };
  }, []);

  return null;
}
