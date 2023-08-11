import cn from '@/utils/cn';
import Image from 'next/image';

interface FloatButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function FloatButton({ className, onClick, disabled }: FloatButtonProps) {
  return (
    <button
      className={cn(
        'flex h-60 w-60 items-center justify-center rounded-full bg-primary text-sign-white shadow-float active:bg-primary-dark disabled:bg-primary-light',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <Image src="/icons/24/add.svg" width={24} height={24} alt="add" />
    </button>
  );
}
