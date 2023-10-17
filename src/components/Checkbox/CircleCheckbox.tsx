import { Icon } from '@/components/Icon';

interface CircleCheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  variant?: 'solid' | 'outline';
}

export default function CircleCheckbox({
  checked = false,
  variant = 'solid',
  ...props
}: CircleCheckboxProps) {
  const checkboxIconId = `24-checkbox_${variant}_${checked ? 'checked' : 'default'}`;

  return (
    <div className="flex items-center" {...props}>
      <Icon id={checkboxIconId} />
    </div>
  );
}
