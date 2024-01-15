'use client';
import Loading from './Loading';
import { ModalWrapper } from '../Modal';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface LayerLoadingProps {
  isLoading: boolean;
  layerNumber?: number;
}

export default function LayerLoading({ isLoading, layerNumber = 1 }: LayerLoadingProps) {
  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <ModalWrapper layerNumber={layerNumber}>
          <Loading />
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
}
