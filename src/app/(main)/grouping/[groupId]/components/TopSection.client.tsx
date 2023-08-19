'use client';
import { useGetGroupDetail } from '@/apis/groups';
import { Spacing } from '@/components/common/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';
import Image from 'next/image';

export default function TopSection() {
  const { groupId } = useNumberParams<['groupId']>();

  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { imageUrl, title, content } = groupDetailData;

  return (
    <section>
      <div className="relative aspect-[8/5]">
        <Image src={imageUrl ?? '/images/dummy_image.png'} alt="thumbnail" fill />
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
