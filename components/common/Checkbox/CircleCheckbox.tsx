import Image from 'next/image';

interface CircleCheckboxProps {
  text?: React.ReactNode;
  checked?: boolean;
  onClick?: () => void;
}
export default function CircleCheckbox({
  text,
  checked = false,
  onClick,
  ...rest
}: CircleCheckboxProps) {
  const checkboxImageAsset = `/assets/checkbox_circle${checked ? '_checked' : ''}.svg`;
  return (
    <div className="flex items-baseline" onClick={onClick} {...rest}>
      <Image
        alt="checkbox"
        src={checkboxImageAsset}
        width={15}
        height={30}
        className="mx-10 translate-y-5"
      />
      {text}
    </div>
  );
}
