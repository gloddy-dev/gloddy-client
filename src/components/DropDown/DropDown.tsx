'use client';

import { useState } from 'react';

import { StrictPropsWithChildren } from '@/types';

export type DropDownOptionType = {
  name: string;
  onClick: () => void;
};

interface DropDownProps {
  options: DropDownOptionType[];
  className?: string;
}

export default function Dropdown({
  options,
  className,
  children,
}: StrictPropsWithChildren<DropDownProps>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${className}`}>
      <div className="" onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>
      {isOpen && (
        <div className="absolute right-10 min-w-150">
          {options.map((option) => (
            <div
              key={option.name}
              className="rounded-xl bg-sub px-10 py-10 text-paragraph-1 hover:bg-brand-color hover:text-sign-brand"
              onClick={option.onClick}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
