import Spacing from './Spacing';
import clsx from 'clsx';

interface DivisionSpacing {
  className?: string;
  isFixed?: boolean;
  size: number;
}

export default function DivisionSpacing({ className, isFixed = false, size }: DivisionSpacing) {
  return (
    <Spacing
      size={size}
      className={clsx(
        isFixed ? 'fixed inset-x-0 mx-auto max-w-450 bg-white2' : 'w-full',
        className
      )}
    />
  );
}
