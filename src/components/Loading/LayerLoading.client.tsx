'use client';
import Loading from './Loading';
import { ModalWrapper } from '../Modal';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import type { MutationStatus } from '@tanstack/react-query';

interface LayerLoadingProps {
  status: MutationStatus;
  layerNumber?: number;
}

export default function LayerLoading({ status, layerNumber = 1 }: LayerLoadingProps) {
  const isLayerLoading = status !== 'idle' && status !== 'error';

  useEffect(() => {
    document.body.style.overflow = isLayerLoading ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLayerLoading]);

  return (
    <AnimatePresence>
      {isLayerLoading && (
        <ModalWrapper layerNumber={layerNumber}>
          <Loading />
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
}
