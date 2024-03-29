'use client';

import {
  Children,
  type ReactElement,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
} from 'react';

import type { StrictPropsWithChildren } from '@/types';

import cn from '@/utils/cn';

type ValueType = string | number | null;

// 선택된 Segment의 border를 없애기 위한 로직
function renderElements(elements: ReactElement[], selectedValue?: ValueType) {
  return elements.map((element, index) => {
    if (index === elements.length - 1) {
      return cloneElement(element, {
        className: cn('border-none', element.props.className),
      });
    }
    if (elements[index + 1].props.value === selectedValue) {
      return cloneElement(element, {
        className: cn('border-none', element.props.className),
      });
    }
    return element;
  });
}

type SegmentContextValue<T = any> = {
  selectedValue?: T;
  onChange: (selectedValue: T) => void;
};

const SegmentContext = createContext<SegmentContextValue | null>(null);

interface SegmentGroupProps<T extends ValueType>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * 선택된 Segment의 value입니다.
   */
  selectedValue?: T;
  /**
   * Segment를 선택했을 때 호출되는 함수입니다.
   */
  onChange: (selectedValue: T) => void;
}

function SegmentGroup<T extends ValueType>({
  selectedValue,
  onChange,
  className,
  children,
  ...props
}: StrictPropsWithChildren<SegmentGroupProps<T>>) {
  const validChildren = Children.toArray(children).filter((child) =>
    isValidElement(child)
  ) as ReactElement[];

  if (validChildren.length === 0) {
    throw new Error('SegmentGroup은 하나 이상의 Segment를 포함해야 합니다.');
  }

  return (
    <SegmentContext.Provider
      value={{
        selectedValue,
        onChange,
      }}
    >
      <div
        className={cn('rounded-8 border-border-default flex overflow-hidden border', className)}
        {...props}
      >
        {renderElements(validChildren, selectedValue)}
      </div>
    </SegmentContext.Provider>
  );
}

interface SegmentProps<T extends ValueType> {
  /**
   * 세그먼트에 보여질 라벨입니다.
   */
  label: string;
  /**
   * 세그먼트의 value입니다.
   */
  value: T;
  /**
   * 클래스를 추가할 수 있습니다.
   */
  className?: string;
}

// TODO: selectedValue의 타입이 추론되도록 수정
function Segment<T extends ValueType>({ label, value, className }: SegmentProps<T>) {
  const { onChange, selectedValue } = useContext(SegmentContext)!;

  const isSelected = selectedValue === value;

  return (
    <button
      className={cn(
        'text-subtitle-2 flex-grow p-16',
        {
          ' bg-primary text-sign-white': isSelected,
          'border-r-1 border-border-default text-subtitle-2 bg-white': !isSelected,
        },
        className
      )}
      onClick={() => onChange(value)}
      type="button"
    >
      {label}
    </button>
  );
}

export default Object.assign(SegmentGroup, { Segment });
