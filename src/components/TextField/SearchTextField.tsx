import TextField from './TextField';
import Image from 'next/image';

interface SearchTextFieldProps {}
export default function SearchTextField() {
  return (
    <TextField
      inputLeftIcon={
        <Image src="/icons/search.svg" width={24} height={24} alt="search" className="mr-8" />
      }
    />
  );
}
