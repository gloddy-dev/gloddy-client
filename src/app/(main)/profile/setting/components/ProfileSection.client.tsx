'use client';

import { useGetProfile } from '@/apis/profile';
import { Avatar } from '@/components/Avatar';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import Link from 'next/link';

export default function ProfileSection() {
  const { data: profileData } = useGetProfile();
  const { imageUrl, nickname, reliabilityLevel } = profileData;

  return (
    <section className="px-20 py-8">
      <Flex align="center" className="gap-12 rounded-8 bg-sub px-16 py-12">
        <Avatar imageUrl={imageUrl} />
        <div>
          <p className="text-paragraph-1">{nickname}</p>
          <Spacing direction="horizontal" size={2} />
          <p className="flex text-caption text-sign-tertiary">
            <Icon
              id={`16-reliability-${reliabilityLevel.toLocaleLowerCase()}`}
              width={16}
              height={16}
            />
            {reliabilityLevel}
          </p>
        </div>
        <Link href="/profile/setting/edit" className="ml-auto">
          <Icon id="24-settings" />
        </Link>
      </Flex>
    </section>
  );
}
