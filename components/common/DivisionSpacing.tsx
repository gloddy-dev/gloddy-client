import clsx from 'clsx';

import Spacing from './Spacing';

interface DivisionSpacing {
  color?: string;
}

export default function DivisionSpacing({ color = 'white2' }) {
  const bgColor = `bg-${color}`;

  return <Spacing size={10} className={clsx('fixed inset-x-0 mx-auto max-w-450', bgColor)} />;
}
