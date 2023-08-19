import Button from './Button';
import { Spacing } from '../common/Spacing';
import cn from '@/utils/cn';
import { Children, type ReactElement, cloneElement, isValidElement } from 'react';

import type { StrictPropsWithChildren } from '@/types';

const renderElements = (
  elements: ReactElement[],
  props: Array<React.ComponentProps<typeof Button>>
) => {
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
  const validChildren = Children.toArray(children).filter((child) => {
    console.log(child);
    console.log(isValidElement(child));
    // (
    //   child.type as {
    //     name: string;
    //   }
    // ).name === 'Button'
  }) as ReactElement[];

  console.log(validChildren);

  if (validChildren.length === 0) {
    throw new Error('ButtonGroup 컴포넌트는 Button 컴포넌트를 포함해야 합니다.');
  }

  if (validChildren.length > 2) {
    throw new Error('ButtonGroup 컴포넌트는 2개 이하의 Button 컴포넌트를 포함해야 합니다.');
  }

  const props = validChildren.map((child) => child.props as React.ComponentProps<typeof Button>);

  const buttonHeight = {
    small: 48,
    medium: 56,
  }[props[0].size ?? 'medium'];

  return (
    <>
      {isSpacing && <Spacing size={buttonHeight + 28} />}
      <div
        className={cn('mx-auto border-t-1 border-divider bg-white p-20 pt-7', {
          'fixed inset-x-0 bottom-0 z-50 max-w-450': position === 'bottom',
        })}
      >
        {renderElements(validChildren, props)}
      </div>
    </>
  );
}
