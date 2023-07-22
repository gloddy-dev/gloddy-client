import Image from 'next/image';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CircleCheckboxProps {
  text?: React.ReactNode;
  checked?: boolean;
  onClick?: () => void;
  register?: UseFormRegisterReturn;
}

function CircleCheckbox({
  text,
  checked = false,
  onClick,
  register,
  ...props
}: CircleCheckboxProps) {
  const checkboxImageAsset = `/assets/checkbox_circle${checked ? '_checked' : ''}.svg`;
  return (
    <div className="flex items-center" onClick={onClick} {...register} {...props}>
      <Image alt="checkbox" src={checkboxImageAsset} width={15} height={30} className="mx-10" />
      {text}
    </div>
  );
}

export default CircleCheckbox;
