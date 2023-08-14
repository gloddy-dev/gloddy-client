import Button from './Button';
import { Spacing } from '../common/Spacing';
import cn from '@/utils/cn';
import { Children, type ReactElement, cloneElement, isValidElement } from 'react';

import type { StrictPropsWithChildren } from '@/types';

interface ButtonGroupProps {
  /**
   * 버튼 그룹의 위치를 설정합니다. (default: bottom)
   */
  position?: 'bottom' | 'contents';
  /**
   * 공백 여부를 설정합니다. (default: true)
   */
  isSpacing?: boolean;
}

export default function ButtonGroup({
  position = 'bottom',
  isSpacing = true,
  children,
}: StrictPropsWithChildren<ButtonGroupProps>) {
  const validChildren = Children.toArray(children).filter(
    (child) =>
      isValidElement(child) &&
      (
        child.type as {
          name: string;
        }
      ).name === 'Button'
  ) as ReactElement[];

  const props = validChildren.map((child) => child.props as React.ComponentProps<typeof Button>);

  const buttonHeight = {
    small: 48,
    medium: 56,
  }[props[0].size ?? 'medium'];

  const renderElements = (elements: ReactElement[]) => {
    if (elements.length === 1) {
      return elements[0];
    }

    return (
      <div className="flex gap-8">
        {elements.map((element, index) => {
          return cloneElement(element, {
            className: cn(
              {
                'flex-shrink-0 w-auto': index === 0,
              },
              props[index].className
            ),
            variant: cn(
              {
                'solid-default': index === 0,
                'solid-primary': index !== 0,
              },
              props[index].variant
            ),
          });
        })}
      </div>
    );
  };

  return (
    <>
      {isSpacing && <Spacing size={buttonHeight + 28} />}
      <div
        className={cn('mx-auto border-t-1 border-divider bg-white p-20 pt-7', {
          'fixed inset-x-0 bottom-0 z-50 max-w-450': position === 'bottom',
        })}
      >
        {renderElements(validChildren)}
      </div>
    </>
  );
}
