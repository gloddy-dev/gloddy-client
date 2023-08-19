import Spacing from './Spacing';
import cn from '@/utils/cn';

interface DivisionSpacing {
  className?: string;
  size: number;
}

export default function DivisionSpacing({ className, size }: DivisionSpacing) {
  return (
    <Spacing
      size={size}
      className={cn('fixed inset-x-0 mx-auto max-w-450 bg-divider', className)}
    />
  );
}
