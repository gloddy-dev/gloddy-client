'use client';

import { useGetProfile } from '@/apis/profile';
import { Avatar } from '@/components/Avatar';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { NavLink } from '@/components/NavLink';
import { Spacing } from '@/components/Spacing';

export default function ProfileSection() {
  const { data: profileData } = useGetProfile();
  const { imageUrl, nickname, reliabilityLevel } = profileData;

  return (
    <section className="px-20 py-8">
      <Flex align="center" className="rounded-8 bg-sub gap-12 px-16 py-12">
        <Avatar imageUrl={imageUrl} />
        <div>
          <p className="text-paragraph-1">{nickname}</p>
          <Spacing direction="horizontal" size={2} />
          <p className="text-caption text-sign-tertiary flex">
            <Icon
              id={`16-reliability-${reliabilityLevel.toLocaleLowerCase()}`}
              width={16}
              height={16}
            />
            {reliabilityLevel}
          </p>
        </div>
        <NavLink href="/profile/setting/edit" className="ml-auto">
          <Icon id="24-settings" />
        </NavLink>
      </Flex>
    </section>
  );
}
