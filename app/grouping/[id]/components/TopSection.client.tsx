'use client';
import { GroupResponse } from '@/apis/groups/type';
import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';

interface TopSectionProps {
  groupData: GroupResponse;
}

export default function TopSection({ groupData }: TopSectionProps) {
  const { imageUrl, title, content } = groupData;

  return (
    <section>
      <div className="relative h-350">
        <Image
          src={imageUrl ?? '/assets/main_logo.png'}
          alt="thumbnail"
          className="w-full rounded-b-35"
          fill
        />
      </div>
      <div className="p-20">
        <Spacing size={16} />
        <h1 className="text-18 font-700 text-gray">{title}</h1>
        <Spacing size={8} />
        <p className="text-12 font-400 text-gray2">{content}</p>
      </div>
    </section>
  );
}
