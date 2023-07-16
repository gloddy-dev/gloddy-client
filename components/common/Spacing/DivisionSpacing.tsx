import clsx from 'clsx';

import Spacing from './Spacing';

interface DivisionSpacing {
  className?: string;
}

export default function DivisionSpacing({ className }: DivisionSpacing) {
  return (
    <Spacing
      size={10}
      className={clsx('fixed inset-x-0 mx-auto max-w-450', className ? className : 'bg-white2')}
    />
  );
}
