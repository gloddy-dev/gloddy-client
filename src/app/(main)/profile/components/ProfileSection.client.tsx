'use client';
import ImageFrame from '@/components/common/ImageFrame';
import { DivisionBar, Spacing } from '@/components/common/Spacing';
import { usePathname, useRouter } from 'next/navigation';

import type { ProfileResponse } from '@/apis/profile';

interface ProfileSectionProps {
  profileData: ProfileResponse;
}

export default function ProfileSection({ profileData }: ProfileSectionProps) {
  const { age, gender, imageUrl, name, praiseCount, reviewCount, school } = profileData;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="h-500 rounded-b-35 bg-white px-40">
      <Spacing size={30} />
      <article className="flex flex-col items-center">
        <ImageFrame canChange={false} />
        {/* TODO : 서버 측 이미지 에러로 defaultImageUrl 빼둔 상태 */}
        <p>
          <span className="font-700 text-20 leading-40">{name}</span>
          <span className="font-400 text-14 leading-40 text-gray2">님</span>
        </p>
        <p className="font-400 text-14 leading-40 text-gray2">
          {gender === 'MAIL' ? '남' : '여'} | {age}세 | {school}
        </p>
      </article>
      <DivisionBar className="my-20" />
      <article className="flex flex-col">
        <p className="font-700 text-12">신뢰도 지표</p>
        {/* TODO : 신뢰도 API 나오면 구현 예정 */}
      </article>
      <DivisionBar className="my-20" />
      <article className="flex h-40">
        <div className="flex flex-grow flex-col items-center justify-center">
          <p className="text-12">최근 모임</p>
          <p className="font-700 text-14">5회</p>
        </div>
        <DivisionBar direction="vertical" />
        <div
          className="flex flex-grow flex-col items-center"
          onClick={() => router.push(`${pathname}/praise`)}
        >
          <p className="text-12">받은 칭찬</p>
          <p className="font-700 text-14 text-blue">{praiseCount}개</p>
        </div>
        <DivisionBar direction="vertical" />
        <div
          className="flex flex-grow flex-col items-center"
          onClick={() => router.push(`${pathname}/mates`)}
        >
          <p className="text-12">모임 후기</p>
          <p className="font-700 text-14 text-blue">{reviewCount}개</p>
        </div>
      </article>
    </section>
  );
}
