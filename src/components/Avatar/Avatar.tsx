import { Icon } from '../Icon';
import cn from '@/utils/cn';
import Image from 'next/image';

import type { PropsWithChildren } from 'react';

interface AvatarProps {
  /**
   * 아바타의 이미지 URL을 지정합니다. (필수)
   */
  imageUrl: string;
  /**
   * 아바타의 크기를 지정합니다. small: 40x40, medium: 56x56, large: 96x96 (기본값: medium)
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 우측 상단 아이콘에 대한 변수를 지정합니다. (기본값: none)
   */
  iconVariant?: 'none' | 'add' | 'draft_orders' | 'education';
  onClick?: () => void;
}
export default function Avatar({
  imageUrl,
  onClick,
  size = 'medium',
  children,
  iconVariant = 'none',
}: PropsWithChildren<AvatarProps>) {
  return (
    <span
      className={cn('relative flex shrink-0 flex-col items-center gap-1 overflow-hidden', {
        'w-40': size === 'small',
        'w-56': size === 'medium',
        'w-96': size === 'large',
      })}
      onClick={onClick}
    >
      <div className="relative flex w-full before:block before:pb-[100%]">
        {!!imageUrl ? (
          <Image
            src={imageUrl}
            alt="avatar"
            className="cursor-pointer rounded-full object-cover"
            fill
          />
        ) : (
          <div className="h-full w-full cursor-pointer rounded-full bg-sub" />
        )}
        {iconVariant !== 'none' && (
          <Icon
            id={`32-${iconVariant}`}
            className={cn('absolute', {
              '-right-6 -top-6': size === 'small',
              '-right-2 -top-2': size === 'medium',
              '-right-1 -top-1': size === 'large',
            })}
            width={size === 'large' ? 32 : 24}
            height={size === 'large' ? 32 : 24}
          />
        )}
      </div>
      {children}
    </span>
  );
}
