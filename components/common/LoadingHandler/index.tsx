import { AnimatePresence } from 'framer-motion';
import React, { type PropsWithChildren, type ReactElement, useId } from 'react';

interface LoadingHandlerProps {
  isLoading: boolean;
  loadingComponent: ReactElement;
}

function LoadingHandler({
  children,
  isLoading,
  loadingComponent,
}: PropsWithChildren<LoadingHandlerProps>) {
  const id = useId();

  return (
    <AnimatePresence mode="wait">
      {isLoading ? <React.Fragment key={id}>{loadingComponent}</React.Fragment> : children}
    </AnimatePresence>
  );
}

export default LoadingHandler;
