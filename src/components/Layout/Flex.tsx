import cn from '@/utils/cn';
import { forwardRef } from 'react';

import type { StrictPropsWithChildren } from '@/types';

interface FlexProps<T extends React.ElementType> extends React.HTMLAttributes<T> {
  as?: T;
  children?: React.ReactNode;
  direction?: 'row' | 'column';
  justify?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly' | 'stretch';
  align?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly' | 'stretch';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  className?: string;
}

export default forwardRef(function Flex<T extends React.ElementType>(
  {
    as,
    children,
    direction,
    justify,
    align,
    wrap,
    className,
    ...props
  }: StrictPropsWithChildren<FlexProps<T> & React.ComponentPropsWithoutRef<T>>,
  ref: React.ComponentPropsWithRef<T>['ref']
) {
  const Element = as ?? 'div';

  return (
    <Element
      ref={ref}
      className={cn(
        'flex',
        {
          'justify-center': justify === 'center',
          'justify-start': justify === 'start',
          'justify-end': justify === 'end',
          'justify-between': justify === 'between',
          'justify-around': justify === 'around',
          'justify-evenly': justify === 'evenly',
          'justify-stretch': justify === 'stretch',
        },
        {
          'items-center': align === 'center',
          'items-start': align === 'start',
          'items-end': align === 'end',
          'items-between': align === 'between',
          'items-around': align === 'around',
          'items-evenly': align === 'evenly',
          'items-stretch': align === 'stretch',
        },
        {
          'flex-row': direction === 'row',
          'flex-column': direction === 'column',
        },
        {
          'flex-wrap': wrap === 'wrap',
          'flex-nowrap': wrap === 'nowrap',
          'flex-wrap-reverse': wrap === 'wrap-reverse',
        },
        className
      )}
      {...props}
    >
      {children}
    </Element>
  );
}) as <T extends React.ElementType>(
  props: StrictPropsWithChildren<FlexProps<T> & React.ComponentPropsWithoutRef<T>>
) => JSX.Element;
