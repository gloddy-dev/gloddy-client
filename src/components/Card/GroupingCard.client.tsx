'use client';

import { Icon } from '../Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import cn from '@/utils/cn';
import { formatMeetingDate } from '@/utils/formatMeetingDate';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import type { Grouping } from '@/apis/groups/type';
import type { HTMLAttributes, PropsWithChildren } from 'react';

interface GroupingCardProps extends HTMLAttributes<HTMLDivElement> {
  groupingData: Grouping;
  isNew?: boolean;
  isExistNewApply?: boolean;
  applyId?: number;
  isCaptain?: boolean;
  onClick?: () => void;
}

const blueBadge = ['NEW'];
const warningBadge = ['재학생 인증 필요', '거절됨', '신규 지원'];
const grayBadge = ['심사중', '모집중'];

export default function GroupingCard({
  groupingData,
  children,
  isNew,
  isExistNewApply,
  applyId,
  isCaptain,
  onClick,
}: PropsWithChildren<GroupingCardProps>) {
  const {
    groupId,
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
  const status = isNew ? 'NEW' : isExistNewApply ? '신규 지원' : '';

  return (
    <Flex className="bg-white px-20 py-16" direction="column">
      <Flex
        onClick={() =>
          onClick ||
          router.push(`/grouping/${groupId}`, {
            scroll: false,
          })
        }
        align="center"
      >
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
            <Icon id="16-location" width={16} height={16} />
            <Spacing size={4} direction="horizontal" />
            {placeAddress}
          </div>
          <Spacing size={4} />
          <div className="flex text-caption text-sign-tertiary">
            <Icon id="16-date_range" width={16} height={16} />
            <Spacing size={4} direction="horizontal" />
            {formatMeetingDate(meetDate, startTime)}
          </div>
          {status && <StatusBadge status={status} />}
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
      className={cn('absolute bottom-0 left-0 h-22 w-45 rounded-4 p-4', {
        'bg-brand-color': leftUser >= 2,
        'bg-warning-color': leftUser === 1,
        'bg-sub': leftUser === 0,
      })}
    >
      <Icon
        id={`16-group_${cn({
          blue: leftUser >= 2,
          warning: leftUser === 1,
          gray: leftUser <= 0,
        })}`}
        width={16}
        height={16}
      />
      <span
        className={cn('text-caption text-primary', {
          'text-primary': leftUser >= 2,
          'text-warning': leftUser === 1,
          'text-sign-tertiary': leftUser <= 0,
        })}
      >
        {memberCount}/{maxMemeberCount}
      </span>
    </Flex>
  );
}

interface StatusBadgeProps {
  status: string;
}

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Flex
      className={cn(
        'absolute right-0 top-2 inline h-22 rounded-4 border-1 px-4 py-2 text-caption',
        {
          'border-warning bg-warning-color text-warning': warningBadge.includes(status),
          'border-sign-tertiary bg-sub text-sign-tertiary': grayBadge.includes(status),
          'border-primary bg-brand-color text-primary': blueBadge.includes(status),
        }
      )}
    >
      {status}
    </Flex>
  );
}
