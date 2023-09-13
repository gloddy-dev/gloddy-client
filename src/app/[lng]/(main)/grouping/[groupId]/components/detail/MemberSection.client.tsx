'use client';

import { useGetGroupDetail, useGetGroupMembers } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Avatar } from '@/components/Avatar';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';
import { usePathname, useRouter } from 'next/navigation';

export default function MemberSection() {
  const { t } = useTranslation('groupDetail');
  const { groupId } = useNumberParams<['groupId']>();
  const router = useRouter();
  const pathname = usePathname();

  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { memberCount, maxMemberCount } = groupDetailData;

  const { data: groupMembersData } = useGetGroupMembers(groupId);
  const { groupMembers } = groupMembersData;

  return (
    <section>
      <div className="flex items-center justify-between">
        <p className="pl-4 text-subtitle-3 text-sign-secondary">
          {t('details.members', { memberCount, maxMemberCount })}
        </p>
        <div
          className="flex cursor-pointer items-center text-caption text-sign-caption"
          onClick={() => router.push(`${pathname}/members`, { scroll: false })}
        >
          <p>{t('details.viewAll')}</p>
          <Icon id="24-navigate_next" />
        </div>
      </div>
      <Spacing size={20} />
      <div className="flex items-center gap-16 overflow-x-scroll">
        {groupMembers.map((member) => (
          <Avatar
            key={member.userId}
            imageUrl={member.imageUrl ?? '/images/dummy_avatar.png'}
            iconVariant="education"
            onClick={() => router.prefetch(`${pathname}/members`)}
          >
            <Flex justify="center" align="center" className="w-full">
              {member.isCaptain && (
                <Icon id="16-host" width={16} height={16} className="shrink-0" />
              )}
              <p className="truncate text-caption text-sign-tertiary">{member.nickName}</p>
            </Flex>
          </Avatar>
        ))}
      </div>
    </section>
  );
}
