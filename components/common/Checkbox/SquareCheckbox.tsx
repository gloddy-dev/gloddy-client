import Image from 'next/image';

interface SquareCheckboxProps {
  text?: string;
  checked?: boolean;
}
export default function SquareCheckbox({ text, checked = false }: SquareCheckboxProps) {
  const checkboxImageAsset = `/assets/checkbox_square${checked ? '_checked' : ''}.svg`;
  return (
    <div className="flex">
      <Image alt="checkbox" src={checkboxImageAsset} width={15} height={30} className="mx-10" />
      <p className="text-[#AAA] text-[0.875rem]">{text}</p>
    </div>
  );
}
