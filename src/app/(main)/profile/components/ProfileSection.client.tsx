'use client';
import { useGetProfile } from '@/apis/profile';
import ImageFrame from '@/components/common/ImageFrame';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';
import { Flex } from '@/components/Layout';
import { Tag } from '@/components/Tag';
import { personalityList } from '@/constants/personalityList';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProfileSection() {
  const { data: profileData } = useGetProfile();
  const { age, gender, imageUrl, name, praiseCount, reviewCount, school, personalities } =
    profileData;
  const pathname = usePathname();

  return (
    <section className="h-500 rounded-b-24 bg-white shadow-float">
      <Flex direction="column" align="center">
        <ImageFrame canChange={false} />
        <h4 className="text-h4">{name}</h4>
        <Spacing size={4} />
        <Flex className="h-18 text-caption text-sign-tertiary" align="center">
          <Image src="/icons/16/school.svg" width={16} height={16} alt="school" />
          <span>{school}</span>
          <Divider direction="vertical" className="mx-4" />
          <Image src="/icons/16/male.svg" width={16} height={16} alt="male" />
          <span>{gender === 'MAIL' ? '남' : '여'}</span>
          <Divider direction="vertical" className="mx-4" />
          <Image src="/icons/16/birth.svg" width={16} height={16} alt="birth" />
          <span>{age}세</span>
        </Flex>
        <Spacing size={16} />
        <Flex className="gap-4">
          {personalities.map((personality) => (
            <Tag key={personality} className="border-none bg-brand-color text-primary-dark">
              {personalityList.find((it) => it.keywordInEnglish === personality)?.keyword}
            </Tag>
          ))}
        </Flex>
        <Spacing size={20} />
        <Divider />
        <Spacing size={24} />
      </Flex>

      <Flex className="px-20" direction="column">
        <Flex className="w-full px-4" align="center" justify="start">
          <span className="text-secondary text-subtitle-3">신뢰도 지표 </span>
          <span className="text-caption text-sign-caption">(22.01.01 가입)</span>
        </Flex>
        <Spacing size={8} />
        <Flex direction="column" className="h-70 rounded-8 bg-sub px-12">
          <Spacing size={16} />
          {/* Bar */}
          <Spacing size={8} />
          {/* Badge */}
          <Spacing size={12} />
        </Flex>

        <Spacing size={16} />

        <Flex align="center">
          <div className="flex flex-grow flex-col items-center justify-center">
            <p className="text-tertiary text-caption">누적 모임</p>
            <h4 className="text-secondary text-h4">5회</h4>
          </div>
          <Divider direction="vertical" className="h-12" />
          <Link className="flex flex-grow flex-col items-center" href={`${pathname}/praise`}>
            <p className="text-tertiary text-caption">받은 칭찬</p>
            <h4 className="text-secondary text-h4 text-sign-brand">{praiseCount}회</h4>
          </Link>
          <Divider direction="vertical" className="h-12" />
          <Link className="flex flex-grow flex-col items-center" href={`${pathname}/mates`}>
            <p className="text-tertiary text-caption">모임 후기</p>
            <h4 className="text-secondary text-h4 text-sign-brand">{reviewCount}회</h4>
          </Link>
        </Flex>
      </Flex>
    </section>
  );
}
