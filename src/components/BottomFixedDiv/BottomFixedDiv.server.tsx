import cn from '@/utils/cn';

import type { StrictPropsWithChildren } from '@/types';

export default function BottomFixedDiv({
  children,
  className = '',
  ...props
}: StrictPropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto max-w-450">
      <div className={cn('px-20 pb-20', className)} {...props}>
        {children}
      </div>
    </div>
  );
}
