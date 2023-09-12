'use client';

import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { TextList } from '@/components/TextList';
import { INSTAGRAM_URL } from '@/constants';
import Link from 'next/link';

export default function NoticeSection() {
  return (
    <Flex direction="column" className="gap-8 py-16">
      <TextList variant="info" className="flex items-center">
        재학생 인증을 진행하면 <span className="text-sign-brand">인증마크</span>
        <Icon id="24-education" className="inline" />를 받을 수 있어요
      </TextList>
      <TextList variant="info">신뢰있는 모임을 위해 재학생 인증을 꼭 진행해주세요</TextList>
      <TextList variant="info">재학생 이메일 발급</TextList>
      <TextList variant="info-no-icon">
        <Link href={INSTAGRAM_URL}>{INSTAGRAM_URL}</Link>
      </TextList>
    </Flex>
  );
}
