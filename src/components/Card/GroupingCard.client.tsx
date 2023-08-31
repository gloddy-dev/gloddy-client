'use client';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { formatMeetingDate } from '@/utils/formatMeetingDate';
import clsx from 'clsx';
import { format, getDay, parseISO } from 'date-fns';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import type { Grouping } from '@/apis/groups/type';
import type { PropsWithChildren } from 'react';

interface GroupingCardProps {
  groupingData: Grouping;
}

export default function GroupingCard({
  groupingData,
  children,
}: PropsWithChildren<GroupingCardProps>) {
  const {
    title,
    content,
    imageUrl,
    startTime,
    memberCount,
    maxMemberCount,
    meetDate,
    placeAddress,
  } = groupingData;
  const router = useRouter();

  return (
    <Flex className="bg-white px-20 py-16" direction="column">
      <Flex onClick={() => router.push(`/grouping/${groupingData.groupId}`)} align="center">
        <section className="relative h-96 w-96">
          {imageUrl ? (
            <Image fill src={imageUrl} alt="group" className="rounded-8 object-cover" />
          ) : (
            <div className="h-full rounded-8 bg-white3" />
          )}
          <MemberCountBadge maxMemeberCount={maxMemberCount} memberCount={memberCount} />
        </section>

        <Spacing size={12} direction="horizontal" />

        <section className="relative grow">
          <p className="w-250 truncate text-subtitle-1">{title}</p>
          <p className="w-250 truncate text-paragraph-2 text-sign-secondary">{content}</p>
          <Spacing size={8} />
          <div className="flex text-caption text-sign-tertiary">
            <Image src="/icons/16/location.svg" width={16} height={16} alt="location" />
            <Spacing size={4} direction="horizontal" />
            {placeAddress}
          </div>
          <Spacing size={4} />
          <div className="flex text-caption text-sign-tertiary">
            <Image src="/icons/16/date_range.svg" width={16} height={16} alt="location" />
            <Spacing size={4} direction="horizontal" />
            {formatMeetingDate(meetDate, startTime)}
          </div>
        </section>
      </Flex>
      {children}
    </Flex>
  );
}

interface MemberCountBadgeProps {
  maxMemeberCount: number;
  memberCount: number;
}

function MemberCountBadge({ maxMemeberCount, memberCount }: MemberCountBadgeProps) {
  const leftUser = maxMemeberCount - memberCount;

  return (
    <Flex
      align="center"
      className={clsx('absolute bottom-0 left-0 h-22 w-45 rounded-4 p-4', {
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
        {memberCount}/{maxMemeberCount}
      </span>
    </Flex>
  );
}

interface StatusBadgeProps {
  status: '재학생 인증 필요' | 'NEW' | '심사중' | '거절됨' | '모집중';
}

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Flex
      className={clsx(
        'absolute right-0 top-2 inline h-22 rounded-4 border-1 px-4 py-2 text-caption',
        {
          'border-warning bg-warning-color text-warning':
            status === '재학생 인증 필요' || status === '거절됨',
          'border-sign-tertiary bg-sub text-sign-tertiary':
            status === '심사중' || status === '모집중',
          'border-primary bg-brand-color text-primary': status === 'NEW',
        }
      )}
    >
      {status}
    </Flex>
  );
}
