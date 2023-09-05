'use client';

import { useGetProfile } from '@/apis/profile';
import { Avatar } from '@/components/Avatar';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfileSection() {
  const { data: profileData } = useGetProfile();
  const { imageUrl, name, reliability } = profileData;

  return (
    <section className="px-20 py-8">
      <Flex align="center" className="gap-12 rounded-8 bg-sub px-16 py-12">
        <Avatar imageUrl={imageUrl} />
        <div>
          <p className="text-paragraph-1">{name}</p>
          <Spacing direction="horizontal" size={2} />
          <p className="flex text-caption text-sign-tertiary">
            <Image
              src={`/icons/16/reliability/${reliability.toLocaleLowerCase()}.svg`}
              alt="writerReliabilityLevel"
              width={16}
              height={16}
            />
            {reliability}
          </p>
        </div>
        <Link href="/profile/setting/edit" className="ml-auto">
          <Image src="/icons/24/settings.svg" width={24} height={24} alt="setting" />
        </Link>
      </Flex>
    </section>
  );
}
