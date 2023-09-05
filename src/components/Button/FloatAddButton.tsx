import { Icon } from '@/components/Icon';
import cn from '@/utils/cn';

interface FloatButtonProps {
  /**
   * FloatButton의 className을 설정합니다.
   */
  className?: string;
  /**
   * FloatButton의 클릭 이벤트를 설정합니다.
   */
  onClick?: () => void;
  /**
   * FloatButton의 비활성화 여부를 설정합니다.
   */
  disabled?: boolean;
}

export default function FloatAddButton({ className, onClick, disabled }: FloatButtonProps) {
  return (
    <button
      className={cn(
        'flex h-60 w-60 items-center justify-center rounded-full bg-primary text-sign-white shadow-float active:bg-primary-dark disabled:bg-primary-light',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon id="24-add" />
    </button>
  );
}
