import Spacing from './Spacing';
import clsx from 'clsx';

interface DivisionSpacing {
  className?: string;
  size: number;
}

export default function DivisionSpacing({ className, size }: DivisionSpacing) {
  return (
    <Spacing
      size={size}
      className={clsx('fixed inset-x-0 mx-auto max-w-450 bg-white2', className)}
    />
  );
}
