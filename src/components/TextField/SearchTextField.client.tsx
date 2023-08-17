import TextField, { TextFieldProps } from './TextField.client';
import Image from 'next/image';

export default function SearchTextField<T extends React.ElementType>({
  ...props
}: TextFieldProps<T>) {
  return (
    <TextField
      leftInputIcon={<Image src="/icons/24/search.svg" width={24} height={24} alt="search" />}
      {...props}
    />
  );
}
