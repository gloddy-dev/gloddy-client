'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Oh no, something went wrong... maybe refresh?</p>
    </div>
  );
}
