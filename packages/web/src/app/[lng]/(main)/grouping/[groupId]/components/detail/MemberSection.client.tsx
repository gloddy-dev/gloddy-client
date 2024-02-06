'use client';

import { usePathname } from 'next/navigation';

import { GroupDetailResponse, useGetGroupMembers } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Avatar } from '@/components/Avatar';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import useAppRouter from '@/hooks/useAppRouter';
import { useNumberParams } from '@/hooks/useNumberParams';

interface MemberSectionProps extends GroupDetailResponse {}

export default function MemberSection({ memberCount, maxMemberCount }: MemberSectionProps) {
  const { t } = useTranslation('groupDetail');
  const { groupId } = useNumberParams<['groupId']>();
  const pathname = usePathname();
  const { push } = useAppRouter();

  const { data: groupMembersData } = useGetGroupMembers(groupId);
  const { groupMembers } = groupMembersData;

  return (
    <section className="p-20 pb-16">
      <div className="flex items-center justify-between">
        <p className="text-subtitle-3 text-sign-secondary pl-4">
          {t('details.members', { memberCount, maxMemberCount })}
        </p>
        <div
          className="text-caption text-sign-caption flex cursor-pointer items-center"
          onClick={() => push(`${pathname}/members`, false)}
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
            iconVariant={member.isCertifiedStudent ? 'education' : 'none'}
            onClick={() => push(`${pathname}/members`)}
          >
            <Flex justify="center" align="center" className="w-full">
              {member.isCaptain && (
                <Icon id="16-host" width={16} height={16} className="shrink-0" />
              )}
              <p className="text-caption text-sign-tertiary truncate">{member.nickName}</p>
            </Flex>
          </Avatar>
        ))}
      </div>
    </section>
  );
}
