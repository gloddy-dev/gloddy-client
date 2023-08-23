import { useCallback, useState } from 'react';

export default function useBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    open: useCallback(() => setIsOpen(true), []),
    close: useCallback(() => setIsOpen(false), []),
  };
}
