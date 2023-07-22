import Image from 'next/image';
import { forwardRef } from 'react';

interface CircleCheckboxProps {
  text?: React.ReactNode;
  checked?: boolean;
  onClick?: () => void;
}

function CircleCheckbox(
  { text, checked = false, onClick, ...props }: CircleCheckboxProps,
  ref: React.Ref<HTMLDivElement>
) {
  const checkboxImageAsset = `/assets/checkbox_circle${checked ? '_checked' : ''}.svg`;
  return (
    <div ref={ref} className="flex items-center" onClick={onClick} {...props}>
      <Image alt="checkbox" src={checkboxImageAsset} width={15} height={30} className="mx-10" />
      {text}
    </div>
  );
}

export default forwardRef(CircleCheckbox);
