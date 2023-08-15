import { Spacing } from '@/components/common/Spacing';
import TextList from '@/components/InfoMessage/TextList';
import { INSTAGRAM_URL } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function NoticeSection() {
  return (
    <section>
      <TextList variant="info" className="flex items-center">
        재학생 인증을 진행하면 <span className="text-sign-brand">인증마크</span>
        <Image
          src="/icons/24/education.svg"
          width={24}
          height={24}
          alt="education"
          className="inline"
        />
        를 받을 수 있어요
      </TextList>
      <Spacing size={8} />
      <TextList variant="info">신뢰있는 모임을 위해 재학생 인증을 꼭 진행해주세요</TextList>
      <Spacing size={8} />
      <TextList variant="info">재학생 이메일 발급</TextList>
      <TextList variant="info-no-icon">
        <Link href={INSTAGRAM_URL}>{INSTAGRAM_URL}</Link>
      </TextList>
    </section>
  );
}
