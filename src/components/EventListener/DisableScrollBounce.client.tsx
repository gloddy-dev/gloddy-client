'use client';

import { useEffect } from 'react';

export default function DisableScrollBounce() {
  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      if (document.documentElement.scrollHeight <= window.innerHeight) {
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
