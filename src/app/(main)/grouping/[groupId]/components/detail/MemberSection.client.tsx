'use client';

import { useGetGroupDetail, useGetGroupMembers } from '@/apis/groups';
import { Avatar } from '@/components/Avatar';
import { Icon } from '@/components/Icon';
import { Spacing } from '@/components/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';
import { usePathname, useRouter } from 'next/navigation';

export default function MemberSection() {
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
          모임 멤버 ({memberCount}/{maxMemberCount})
        </p>
        <div
          className="flex cursor-pointer items-center text-caption text-sign-caption"
          onClick={() => router.push(`${pathname}/members`, { scroll: false })}
        >
          <p>전체 보기</p>
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
            onClick={() => router.push(`${pathname}/members`)}
          >
            <Avatar.Name isCaptain={member.isCaptain}>{member.nickName}</Avatar.Name>
          </Avatar>
        ))}
      </div>
    </section>
  );
}
