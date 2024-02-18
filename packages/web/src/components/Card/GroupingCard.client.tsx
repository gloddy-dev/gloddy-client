import Image from 'next/image';
import { useParams } from 'next/navigation';

import { Icon } from '../Icon';
import ImageSample from '../Image/ImageSample';
import { NavLink } from '../NavLink';

import type { Grouping } from '@/apis/groups/type';
import type { HTMLAttributes, PropsWithChildren } from 'react';

import { useDeleteScrapMeeting } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { usePlaceDetails } from '@/hooks';
import { cn, formatMeetingDate } from '@/utils';

interface GroupingCardProps extends HTMLAttributes<HTMLDivElement> {
  groupingData: Grouping;
  isNew?: boolean;
  isExistNewApply?: boolean;
  isCaptain?: boolean;
  applyId?: number;
  isScrapped?: boolean;
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
  isCaptain,
  applyId,
  isScrapped,
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
    placeId,
  } = groupingData;

  const { lng } = useParams() as { lng: string };
  const { place } = usePlaceDetails({
    placeId,
    fields: ['formatted_address'],
    language: lng,
    region: 'KR',
  });

  const status = isNew ? 'NEW' : isExistNewApply ? '신규 지원' : '';

  return (
    <Flex className="bg-white px-20 py-16" direction="column">
      <NavLink href={`/grouping/${groupId}`} className="flex items-center">
        <section className="relative h-96 w-96 shrink-0">
          {imageUrl ? (
            <Image
              fill
              src={imageUrl}
              alt="group"
              className="rounded-8 object-cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          ) : (
            <ImageSample width={96} height={96} />
          )}
          <MemberCountBadge maxMemeberCount={maxMemberCount} memberCount={memberCount} />
        </section>

        <Spacing size={12} direction="horizontal" />

        <section className="relative grow overflow-hidden">
          <Flex align="center">
            <p className="text-subtitle-1 grow truncate">{title}</p>
            {isScrapped && <ScrapBadge groupId={groupId} />}
            {status && <StatusBadge status={status} />}
          </Flex>
          <p className="text-paragraph-2 text-sign-secondary truncate">{content}</p>
          <Spacing size={8} />
          <Flex align="center" className="text-caption text-sign-tertiary">
            <Icon id="16-location" width={16} height={16} />
            <Spacing size={4} direction="horizontal" />
            <p className="truncate">{place?.formatted_address || placeAddress}</p>
          </Flex>
          <Spacing size={4} />
          <Flex align="center" className="text-caption text-sign-tertiary">
            <Icon id="16-date_range" width={16} height={16} />
            <Spacing size={4} direction="horizontal" />
            <p className="truncate">{formatMeetingDate(meetDate, startTime)}</p>
          </Flex>
        </section>
      </NavLink>
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
      className={cn('h-22 rounded-4 absolute bottom-0 left-0 p-4', {
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
  const { t } = useTranslation('profile');

  return (
    <Flex
      className={cn('h-22 rounded-4 border-1 text-caption shrink-0 px-4 py-2', {
        'border-warning bg-warning-color text-warning': warningBadge.includes(status),
        'border-sign-tertiary bg-sub text-sign-tertiary': grayBadge.includes(status),
        'border-primary bg-brand-color text-primary': blueBadge.includes(status),
      })}
    >
      {t(status)}
    </Flex>
  );
}

interface ScrapBadgeProps {
  groupId: number;
}

function ScrapBadge({ groupId }: ScrapBadgeProps) {
  const { mutate: mutateDeleteScrap } = useDeleteScrapMeeting(groupId);
  return (
    <Icon
      id="24-scrap_fixed"
      onClick={(e) => {
        e.stopPropagation();
        mutateDeleteScrap({ params: { groupId } });
      }}
      className="mx-12"
    />
  );
}
