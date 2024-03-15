'use client';
import { useEffect } from 'react';

import Loading from './Loading';
import { ModalWrapper } from '../Modal';

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
    <>
      {isPending && (
        <ModalWrapper layerNumber={layerNumber}>
          <Loading />
        </ModalWrapper>
      )}
    </>
  );
}
