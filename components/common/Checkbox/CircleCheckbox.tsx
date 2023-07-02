import Image from 'next/image';

interface CircleCheckboxProps {
  text?: React.ReactNode;
  checked?: boolean;
}
export default function CircleCheckbox({ text, checked = false, ...rest }: CircleCheckboxProps) {
  const checkboxImageAsset = `/assets/checkbox_circle${checked ? '_checked' : ''}.svg`;
  return (
    <div className="flex" {...rest}>
      <Image alt="checkbox" src={checkboxImageAsset} width={15} height={30} className="mx-10" />
      {text}
    </div>
  );
}
