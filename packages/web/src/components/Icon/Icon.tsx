import type { SVGProps } from 'react';

import cn from '@/utils/cn';

interface IconProps extends SVGProps<SVGSVGElement> {
  id: string;
  className?: string;
}

export default function Icon({
  id,
  width = 24,
  height = 24,
  fill = 'none',
  className,
  ...rest
}: IconProps) {
  return (
    <svg width={width} height={height} fill={fill} className={cn('shrink-0', className)} {...rest}>
      <use href={`/sprite/sprite.svg#${id}`} />
    </svg>
  );
}
