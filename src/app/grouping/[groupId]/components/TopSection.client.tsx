'use client';
import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';

import type { GroupDetailResponse } from '@/apis/groups';

interface TopSectionProps {
  groupDetailData: GroupDetailResponse;
}

export default function TopSection({ groupDetailData }: TopSectionProps) {
  const { imageUrl, title, content } = groupDetailData;

  return (
    <section>
      <div className="relative aspect-[8/5]">
        <Image src={imageUrl ?? '/dummy_image.png'} alt="thumbnail" fill />
      </div>
      <Spacing size={24} />
      <div className="px-20">
        <h4 className="text-h4 text-sign-cto">{title}</h4>
        <Spacing size={8} />
        <p className="text-paragraph-2 text-sign-secondary">{content}</p>
      </div>
      <Spacing size={20} />
    </section>
  );
}
