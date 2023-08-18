'use client';
import { formatDate } from '../util';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import clsx from 'clsx';
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
    <Flex
      className="h-128 bg-white py-16"
      onClick={() => router.push(`/grouping/${groupingData.groupId}`)}
      direction="column"
      align="center"
    >
      <section className="relative h-96 w-96">
        {imageUrl ? (
          <Image fill src={imageUrl} alt="group" className="rounded-8" />
        ) : (
          <div className="h-full rounded-8 bg-white3" />
        )}
        <Badge maxUser={maxUser} memberCount={memberCount} />
      </section>

      <Spacing size={12} direction="horizontal" />

      <section>
        <p className="w-250 truncate text-subtitle-1">{title}</p>
        {/* <p className="w-250 truncate text-paragraph-2 text-sign-secondary">{content}</p> */}
        <Spacing size={8} />
        <p className="flex text-caption text-sign-tertiary">
          <Image src="/icons/16/location.svg" width={16} height={16} alt="location" />
          {place}
        </p>
        <Spacing size={4} />
        <p className="flex text-caption text-sign-tertiary">
          <Image src="/icons/16/date_range.svg" width={16} height={16} alt="location" />
          {formatDate(meetDate)}
        </p>
      </section>
    </Flex>
  );
}

interface BadgeProps {
  maxUser: number;
  memberCount: number;
}

function Badge({ maxUser, memberCount }: BadgeProps) {
  const leftUser = maxUser - memberCount;

  return (
    <Flex
      align="center"
      className={clsx('absolute bottom-0 left-0 h-22 w-45 rounded-8 p-4', {
        'bg-brand-color': leftUser >= 2,
        'bg-warning-color': leftUser === 1,
        'bg-sub': leftUser === 0,
      })}
    >
      <Image
        src={`/icons/16/group_${clsx({
          blue: leftUser >= 2,
          warning: leftUser === 1,
          gray: leftUser === 0,
        })}.svg`}
        width={16}
        height={16}
        alt="group"
      />
      <span
        className={clsx('text-caption text-primary', {
          'text-primary': leftUser >= 2,
          'text-warning': leftUser === 1,
          'text-sign-tertiary': leftUser === 0,
        })}
      >
        {memberCount}/{maxUser}
      </span>
    </Flex>
  );
}
