'use client';
import Loading from './Loading';
import { ModalWrapper } from '../Modal';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface LayerLoadingProps {
  isPending: boolean;
  layerNumber?: number;
}

export default function LayerLoading({ isPending, layerNumber = 1 }: LayerLoadingProps) {
  useEffect(() => {
    document.body.style.overflow = isPending ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPending]);

  return (
    <AnimatePresence>
      {isPending && (
        <ModalWrapper layerNumber={layerNumber}>
          <Loading />
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
}
