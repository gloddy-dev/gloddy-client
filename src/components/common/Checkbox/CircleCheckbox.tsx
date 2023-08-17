import Image from 'next/image';

interface CircleCheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  variant?: 'solid' | 'outline';
}

export default function CircleCheckbox({
  checked = false,
  variant = 'solid',
  ...props
}: CircleCheckboxProps) {
  const checkboxIcon = `/icons/24/checkbox_${variant}_${checked ? 'checked' : 'default'}.svg`;

  return (
    <div className="flex items-center" {...props}>
      <Image alt="checkbox" src={checkboxIcon} width={24} height={24} />
    </div>
  );
}
