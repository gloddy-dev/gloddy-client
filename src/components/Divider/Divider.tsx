import cn from '@/utils/cn';
import { memo } from 'react';

interface DividerProps {
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

export default memo(function Divider({
  className,
  thickness = 'thin',
  direction = 'horizontal',
  flexItem = false,
  ...props
}: DividerProps) {
  return (
    <div
      className={cn(
        'h-auto w-auto flex-none bg-divider',
        {
          'h-1': direction === 'horizontal' && thickness === 'thin',
          'h-8': direction === 'horizontal' && thickness === 'thick',
          'w-1': direction === 'vertical' && thickness === 'thin',
          'w-8': direction === 'vertical' && thickness === 'thick',
          'self-stretch': flexItem,
        },
        className
      )}
      {...props}
    />
  );
});
