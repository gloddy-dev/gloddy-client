'use client';
import cn from '@/utils/cn';
import {
  Children,
  type ReactElement,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
} from 'react';

import type { StrictPropsWithChildren } from '@/types';

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

interface SegmentGroupProps<T extends ValueType> {
  selectedValue?: T;
  onChange: (selectedValue: T) => void;
}

function SegmentGroup<T extends ValueType>({
  selectedValue,
  onChange,
  children,
}: StrictPropsWithChildren<SegmentGroupProps<T>>) {
  const validChildren = Children.toArray(children).filter(
    (child) =>
      isValidElement(child) &&
      (
        child.type as {
          name: string;
        }
      ).name === 'Segment'
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
      <div className="flex overflow-hidden rounded-8 border border-border-default">
        {renderElements(validChildren, selectedValue)}
      </div>
    </SegmentContext.Provider>
  );
}

interface SegmentProps<T extends ValueType> {
  label: string;
  value: T;
  className?: string;
}

// TODO: selectedValue의 타입이 추론되도록 수정
function Segment<T extends ValueType>({ label, value, className }: SegmentProps<T>) {
  const { onChange, selectedValue } = useContext(SegmentContext)!;

  const isSelected = selectedValue === value;

  return (
    <button
      className={cn(
        'flex-grow p-16 text-subtitle-2',
        {
          ' bg-primary text-sign-white': isSelected,
          'border-r-1 border-border-default bg-white text-subtitle-2': !isSelected,
        },
        className
      )}
      onClick={() => onChange(value)}
    >
      {label}
    </button>
  );
}

export default Object.assign(SegmentGroup, { Segment });
