'use client';
import { type GroupMember, useGetGroupMembers } from '@/apis/groups';
import { Avatar } from '@/components/Avatar';
import { IconButton } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { ItemList } from '@/components/List';
import { useNumberParams } from '@/hooks/useNumberParams';
import Link from 'next/link';

export default function MemeberList() {
  const { groupId } = useNumberParams<['groupId']>();
  const { data: groupMemberData } = useGetGroupMembers(groupId);
  const { groupMembers } = groupMemberData;

  return <ItemList data={groupMembers} renderItem={(member) => <MemberItem member={member} />} />;
}

interface MemberItemProps {
  member: GroupMember;
}

function MemberItem({ member }: MemberItemProps) {
  const { userId, imageUrl, nickName, isCaptain, isCertifiedStudent, reliabilityLevel } = member;
  return (
    <Link href={`/profile/${userId}`} scroll={false}>
      <Flex align="center" className="mx-20 my-8 flex-auto gap-12 py-4">
        <Avatar imageUrl={imageUrl} iconVariant={isCertifiedStudent ? 'education' : 'none'} />
        <div className="min-w-0 grow">
          <Flex align="center" className="gap-2">
            <span className="truncate">{nickName}</span>
            {isCaptain && <Icon id="16-host" width={16} height={16} />}
          </Flex>
          <Flex align="center" className="gap-2">
            <Icon id={`16-reliability-${reliabilityLevel.toLowerCase()}`} width={16} height={16} />
            <p className="text-caption text-sign-tertiary">{reliabilityLevel}</p>
          </Flex>
        </div>
        <IconButton>
          <Icon id="24-navigate_next" />
        </IconButton>
      </Flex>
    </Link>
  );
}
