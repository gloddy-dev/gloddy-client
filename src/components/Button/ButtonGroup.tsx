import cn from '@/utils/cn';
import { Children, type ReactElement, cloneElement, isValidElement } from 'react';

import type { ButtonProps } from './Button';

interface ButtonGroupProps {
  /**
   * 버튼 그룹의 위치를 설정합니다. (default: bottom)
   */
  position?: 'bottom' | 'contents';
  children: React.ReactNode;
}

export default function ButtonGroup({ position = 'bottom', children }: ButtonGroupProps) {
  const validChildren = Children.toArray(children).filter(
    (child) =>
      isValidElement(child) &&
      (
        child.type as {
          name: string;
        }
      ).name === 'Button'
  ) as ReactElement[];

  const renderElements = (elements: ReactElement[]) => {
    if (elements.length === 1) {
      const props = elements[0].props as ButtonProps;
      return cloneElement(elements[0], {
        className: cn('w-full', props.className),
      });
    }

    return (
      <div className="flex gap-8">
        {elements.map((element, index) => {
          const props = elements[index].props as ButtonProps;

          if (index === 0) {
            return cloneElement(element, {
              className: cn('flex-shrink-0', props.className),
              variant: props.variant ?? 'solid-default',
            });
          }
          return cloneElement(element, { className: cn('w-full', props.className) });
        })}
      </div>
    );
  };

  return (
    <div
      className={cn('mx-auto border-t-1 border-divider bg-white p-20 pt-7', {
        'fixed inset-x-0 bottom-0 max-w-450': position === 'bottom',
      })}
    >
      {renderElements(validChildren)}
    </div>
  );
}
