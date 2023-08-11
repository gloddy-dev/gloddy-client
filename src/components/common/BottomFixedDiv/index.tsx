import clsx from 'clsx';

import type { StrictPropsWithChildren } from '@/types';

export default function BottomFixedDiv({
  children,
  className = '',
  ...props
}: StrictPropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className="fixed inset-x-0 bottom-0 m-auto max-w-450">
      <div className={clsx('px-20 pb-20', className)} {...props}>
        {children}
      </div>
    </div>
  );
}
