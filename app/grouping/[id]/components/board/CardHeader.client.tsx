'use client';
import Spacing from '@/components/common/Spacing';
import Image from 'next/image';

interface CardHeaderProps {
  name: string;
  writeDate: string;
  isLeader?: boolean;
}

export default function CardHeader({ name, writeDate, isLeader }: CardHeaderProps) {
  const handleMoreClick = () => {};

  const handleUserClick = () => {};
  return (
    <div className="flex">
      <div className="relative h-38 w-38 overflow-hidden rounded-full" onClick={handleUserClick}>
        <Image src="/assets/avatar.svg" alt="avatar" className="object-cover" fill />
      </div>
      <Spacing size={12} direction="horizontal" />
      <div className="flex-grow">
        <div className="flex items-center gap-6">
          <h2 className="text-14 font-700 text-gray">{name}</h2>
          {isLeader && (
            <Image src="/assets/check_mark.svg" alt="leader_mark" width={13} height={13} />
          )}
        </div>
        <p className="text-10 font-400 text-gray4">{writeDate}</p>
      </div>
      <Image
        src="/assets/more.svg"
        alt="more"
        width={3}
        height={13}
        className="cursor-pointer"
        onClick={handleMoreClick}
      />
    </div>
  );
}
