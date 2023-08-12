import TextField from './TextField';
import Image from 'next/image';

export default function SearchTextField() {
  return (
    <TextField
      leftInputIcon={<Image src="/icons/24/search.svg" width={24} height={24} alt="search" />}
    />
  );
}
