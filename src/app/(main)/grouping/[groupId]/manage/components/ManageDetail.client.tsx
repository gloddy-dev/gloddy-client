'use client';

import ApplyCard from './ApplyCard.client';
import { type Apply, useGetApplies } from '@/apis/groups';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { useNumberParams } from '@/hooks/useNumberParams';
import Image from 'next/image';
import { useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const DUMMY_DATA: Apply[] = [
  {
    applyId: 1,
    userId: 1,
    userImageUrl: '/images/dummy_avatar.png',
    userNickname: 'Glow',
    reliabilityLevel: 'GLODDY',
    introduce: '안녕하세요! 저는 글로우입니다. 잘 부탁드립니다.',
    reason: '저는 이 모임에 가입하고 싶습니다.',
  },
  {
    applyId: 2,
    userId: 2,
    userImageUrl: '/images/dummy_avatar.png',
    userNickname: 'Glow',
    reliabilityLevel: 'GLODDY',
    introduce: '안녕하세요! 저는 글로우입니다. 잘 부탁드립니다.',
    reason: '저는 이 모임에 가입하고 싶습니다.',
  },
  {
    applyId: 3,
    userId: 3,
    userImageUrl: '/images/dummy_avatar.png',
    userNickname: 'Glow',
    reliabilityLevel: 'GLODDY',
    introduce: '안녕하세요! 저는 글로우입니다. 잘 부탁드립니다.',
    reason: '저는 이 모임에 가입하고 싶습니다.',
  },
];

export default function ManageDetail() {
  const { groupId } = useNumberParams<['groupId']>();

  const { data: appliesData } = useGetApplies(groupId);
  const { applies, totalCount } = appliesData;

  const [currentApplication, setCurrentApplication] = useState(1);

  if (!totalCount) {
    return (
      <Flex direction="column" justify="center" align="center" className="my-80 gap-8">
        <Image src="/icons/48/cancel.svg" alt="cancel" width={48} height={48} />
        <p className="text-sign-tertiary">아직 지원서가 없어요.</p>
      </Flex>
    );
  }

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
            {currentApplication}/{totalCount}
          </p>
        </Flex>
      </Flex>
      <Swiper
        spaceBetween={8}
        pagination={true}
        modules={[Pagination]}
        slidesPerView={1}
        className="!p-20 !pr-40"
        onSlideChange={(swiper) => setCurrentApplication(swiper.activeIndex + 1)}
      >
        {applies.map((apply) => (
          <SwiperSlide key={apply.userId}>
            <ApplyCard apply={apply} groupId={groupId} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
