'use client';
import OverlayController, { OverlayControlRef } from './OverlayController';
import { OverlayContext } from './OverlayProvider';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';

import type { OverlayElementType } from './type';

let elementId = 1;

interface UseOverlayProps {
  exitOnUnmount?: boolean;
  delay?: number;
}

export default function useOverlay({ exitOnUnmount = true, delay }: UseOverlayProps = {}) {
  const context = useContext(OverlayContext);

  if (context == null) {
    throw new Error('useOverlay is only available within OverlayProvider.');
  }

  const { mount, unmount } = context;
  const [id] = useState(() => String(elementId++));

  const overlayRef = useRef<OverlayControlRef | null>(null);

  useEffect(() => {
    return () => {
      if (exitOnUnmount) {
        unmount(id);
      }
    };
  }, [exitOnUnmount, id, unmount]);

  return useMemo(
    () => ({
      open: (overlayElement: OverlayElementType) => {
        mount(
          id,
          <OverlayController
            key={Date.now()}
            ref={overlayRef}
            overlayElement={overlayElement}
            onExit={() => {
              unmount(id);
            }}
          />
        );
        if (delay) {
          setTimeout(() => {
            unmount(id);
          }, delay);
        }
      },
      close: () => {
        overlayRef.current?.close();
      },
      exit: () => {
        unmount(id);
      },
    }),
    [delay, id, mount, unmount]
  );
}
