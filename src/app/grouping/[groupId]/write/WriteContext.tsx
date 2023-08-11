'use client';
import { createContext, useContext, useMemo, useState } from 'react';

import type { ImageType, StrictPropsWithChildren } from '@/types';

type WriteContextType = {
  images: ImageType[];
  setImages: React.Dispatch<React.SetStateAction<ImageType[]>>;
};

const WriteContext = createContext<WriteContextType | null>(null);

function WriteContextProvider({ children }: StrictPropsWithChildren) {
  const [images, setImages] = useState<ImageType[]>([]);

  const contextValue = useMemo(() => ({ images, setImages }), [images]);

  return <WriteContext.Provider value={contextValue}>{children}</WriteContext.Provider>;
}

function useWriteContext() {
  const context = useContext(WriteContext);
  if (context === null) {
    throw new Error('useWriteContext must be used within a WriteContextProvider');
  }

  return context;
}

export { useWriteContext, WriteContextProvider };
