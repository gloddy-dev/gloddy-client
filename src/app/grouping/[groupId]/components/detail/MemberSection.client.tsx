'use client';

import { useGetGroupDetail, useGetGroupMembers } from '@/apis/groups';
import { Avatar } from '@/components/Avatar';
import { Spacing } from '@/components/common/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function MemberSection() {
  const { groupId } = useNumberParams<['groupId']>();
  const router = useRouter();
  const pathname = usePathname();

  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { maxUser, memberCount } = groupDetailData;

  const { data: groupMembersData } = useGetGroupMembers(groupId);
  const { groupMembers } = groupMembersData;

  return (
    <section>
      <div className="flex items-center justify-between">
        <p className="pl-4 text-subtitle-3 text-sign-secondary">
          모임 멤버 ({memberCount}/{maxUser})
        </p>
        <div
          className="flex cursor-pointer items-center text-caption text-sign-caption"
          onClick={() => router.push(`${pathname}/members`)}
        >
          <p>전체 보기</p>
          <Image src="/icons/24/navigate-next.svg" alt="navigate-next" width={24} height={24} />
        </div>
      </div>
      <Spacing size={20} />
      <div className="flex items-center gap-16 overflow-x-scroll">
        {groupMembers.map((member) => (
          <Avatar
            key={member.userId}
            imageUrl={member.imageUrl}
            isCertified={member.isCertifiedStudent}
          >
            <Avatar.Name isCaptain={member.isCaptain}>{member.nickName}</Avatar.Name>
          </Avatar>
        ))}
      </div>
    </section>
  );
}
