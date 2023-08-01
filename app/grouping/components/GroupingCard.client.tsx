'use client';
import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import type { Grouping } from '@/apis/groups/type';

interface GroupingCardProps {
  groupingData: Grouping;
}

export default function GroupingCard({ groupingData }: GroupingCardProps) {
  const { title, content, memberCount, maxUser, meetDate, place } = groupingData;
  const router = useRouter();

  return (
    <div
      className="flex h-126 w-full cursor-pointer flex-col justify-between rounded-8 bg-white px-20 py-16 pl-14"
      onClick={() => router.push(`/grouping/${groupingData.groupId}`)}
    >
      <div className="flex w-full flex-row">
        <div className="h-60 w-60 rounded-8 bg-white3"></div>
        <Spacing size={13} direction="horizontal" />
        <div className="flex w-206 flex-col">
          <div className="text-14 font-700">{title}</div>
          <div className="text-12 font-400">{content}</div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex items-center">
          <Image src="/assets/avatar.svg" alt="avatar" width={10} height={12} />
          <Spacing size={7} direction="horizontal" />
          <div className="text-12 font-700">{`${memberCount}명`}</div>
          <div className="text-12 font-400">{`/ ${maxUser}명`}</div>
        </div>
        <Spacing size={8} direction="horizontal" />
        <div className="flex items-center">
          <Image src="/assets/location.svg" alt="location" width={10} height={12} />
          <Spacing size={5} direction="horizontal" />
          <div className="text-12 font-400">{place}</div>
        </div>
        <Spacing size={6} direction="horizontal" />
        <div className="text-12 font-400 text-blue3">{meetDate}</div>
      </div>
    </div>
  );
}
