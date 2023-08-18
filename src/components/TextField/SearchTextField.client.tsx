import TextField, { TextFieldProps } from './TextField.client';
import Image from 'next/image';
import { forwardRef } from 'react';

export default forwardRef(function SearchTextField<T extends React.ElementType>(
  { ...props }: TextFieldProps<T> & React.ComponentPropsWithoutRef<T>,
  ref: React.ForwardedRef<HTMLLabelElement>
) {
  return (
    <div>
      <TextField
        ref={ref}
        leftIcon={<Image src="/icons/24/search.svg" width={24} height={24} alt="search" />}
        {...props}
      />
    </div>
  );
}) as <T extends React.ElementType = 'input'>(
  props: TextFieldProps<T> &
    React.ComponentPropsWithoutRef<T> & { ref?: React.ForwardedRef<HTMLLabelElement> }
) => React.ReactElement;
