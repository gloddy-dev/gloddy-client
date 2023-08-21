'use client';

import { useGetProfile } from '@/apis/profile';
import { Avatar } from '@/components/Avatar';
import { Flex } from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfileSection() {
  const { data: profileData } = useGetProfile();
  const { imageUrl, name } = profileData;

  return (
    <section className="px-20 py-8">
      <Flex align="center" className="gap-12 rounded-8 bg-sub px-16 py-12">
        <Avatar imageUrl={imageUrl} />
        <div>
          <p className="text-paragraph-1">{name}</p>
          <p className="text-caption text-sign-tertiary">GLODDY</p>
        </div>
        <Link href="/profile/setting/edit" className="ml-auto">
          <Image src="/icons/24/settings.svg" width={24} height={24} alt="setting" />
        </Link>
      </Flex>
    </section>
  );
}
