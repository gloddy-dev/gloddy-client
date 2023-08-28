'use client';

import ApplyCard from './ApplyCard.client';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import Image from 'next/image';
import { useState } from 'react';

export default function ManageDetail() {
  const [currentApplication, setCurrentApplication] = useState(1);

  return (
    <div>
      <Spacing size={32} />
      <Flex justify="between" align="end" className="px-20">
        <p className="text-h4 text-sign-cto">
          모임에 가입하고 싶은 멤버의
          <br />
          지원서를 확인해주세요
        </p>
        <Flex align="center">
          <Image src="/icons/16/application.svg" alt="application" width={16} height={16} />
          <p className="text-caption text-sign-sub">
            {currentApplication}/{4}
          </p>
        </Flex>
      </Flex>
      {/* TODO: Swiper로 변경 예정 */}
      <Flex className="gap-8 overflow-x-scroll p-20">
        {Array.from({ length: 3 }).map((_, index) => (
          <ApplyCard key={index} />
        ))}
      </Flex>
    </div>
  );
}
