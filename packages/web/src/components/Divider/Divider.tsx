import { memo } from 'react';

import cn from '@/utils/cn';

interface DividerProps<T extends React.ElementType> {
  /**
   * HTML 요소를 지정합니다. (default: div)
   */
  as?: T;
  /**
   * 길이 조절 등 추가 스타일을 적용하고 싶을 때 사용합니다.
   */
  className?: string;
  /**
   * horizontal: 수평, vertical: 수직 (default: horizontal)
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * thin: 1px, thick: 8px (default: thin)
   */
  thickness?: 'thin' | 'thick';
  /**
   * flex에서 사용 시 flexItem을 true로 설정해야합니다. (default: false)
   */
  flexItem?: boolean;
}

export default memo(function Divider<T extends React.ElementType>({
  as,
  className,
  thickness = 'thin',
  direction = 'horizontal',
  flexItem = false,
  ...props
}: DividerProps<T> & React.ComponentPropsWithoutRef<T>) {
  const Element = as ?? 'div';

  return (
    <Element
      className={cn(
        'bg-divider flex-none',
        {
          'h-1 w-full': direction === 'horizontal' && thickness === 'thin',
          'h-8 w-full': direction === 'horizontal' && thickness === 'thick',
          'h-full w-1': direction === 'vertical' && thickness === 'thin',
          'h-full w-8': direction === 'vertical' && thickness === 'thick',
          'self-stretch': flexItem,
        },
        className
      )}
      {...props}
    />
  );
});
