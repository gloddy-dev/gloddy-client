import { AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

import type { StrictPropsWithChildren } from '@/types';

export default function PortalWrapper({ children }: StrictPropsWithChildren) {
  const container = typeof window !== 'undefined' && document.body;

  return container ? createPortal(<AnimatePresence>{children}</AnimatePresence>, container) : null;
}
