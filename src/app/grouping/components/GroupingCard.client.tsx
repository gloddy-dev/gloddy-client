'use client';
import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import type { Grouping } from '@/apis/groups/type';

interface GroupingCardProps {
  groupingData: Grouping;
}

export default function GroupingCard({ groupingData }: GroupingCardProps) {
  const { title, content, imageUrl, memberCount, maxUser, meetDate, place } = groupingData;
  const router = useRouter();

  return (
    <div
      className="flex h-128 cursor-pointer bg-white py-16"
      onClick={() => router.push(`/grouping/${groupingData.groupId}`)}
    >
      <section className="h-96 w-96">
        {imageUrl ? (
          <Image fill src={imageUrl} alt="group" className="rounded-8" />
        ) : (
          <div className="h-full rounded-8 bg-white3" />
        )}
      </section>

      <Spacing size={12} direction="horizontal" />

      <div>
        <p className="text-subtitle-1">{title}</p>
        <p className="text-paragraph-2">{content}</p>
        <Spacing size={8} />
        <p className="flex text-caption text-sign-tertiary">
          <Image src="/icons/16/location.svg" width={16} height={16} alt="location" />
          {place}
        </p>
        <p className="flex text-caption text-sign-tertiary">
          <Image src="/icons/16/date_range.svg" width={16} height={16} alt="location" />
          {meetDate}
        </p>
      </div>
    </div>
  );
}
