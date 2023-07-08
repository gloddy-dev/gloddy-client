import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import type { StrictPropsWithChildren } from '@/types';

interface PortalWrapperProps {
  isShow: boolean;
}

export default function PortalWrapper({
  isShow,
  children,
}: StrictPropsWithChildren<PortalWrapperProps>) {
  const container = typeof window !== 'undefined' && document.body;

  return container
    ? createPortal(<AnimatePresence>{isShow && children}</AnimatePresence>, container)
    : null;
}
