'use client';
import { useGetProfile } from '@/apis/profile';
import { Avatar } from '@/components/Avatar';
import { Divider } from '@/components/Divider';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { Tag } from '@/components/Tag';
import { TextField } from '@/components/TextField';
import { personalityList } from '@/constants/personalityList';
import { reliabilities } from '@/constants/reliabilities';
import cn from '@/utils/cn';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

export default function ProfileDetail() {
  const pathname = usePathname();
  const params = useParams();
  const isPrivateProfile = !params.userId;

  const { data: profileData } = useGetProfile();

  const {
    age,
    gender,
    imageUrl,
    nickname,
    praiseCount,
    reviewCount,
    school,
    joinAt,
    personalities,
    reliabilityLevel,
    reliabilityScore,
    isCertifiedStudent,
    introduce = 'a',
  } = profileData;

  return (
    <>
      <section className="rounded-b-24 bg-white shadow-float">
        <Flex direction="column" align="center">
          <Spacing size={7} />
          <Avatar imageUrl={imageUrl} size="large">
            <Icon
              id={isCertifiedStudent ? '32-education' : '32-error'}
              width={32}
              height={32}
              className="absolute -right-1 -top-1"
            />
            {!isCertifiedStudent && (
              <Flex
                align="center"
                justify="center"
                className="absolute bottom-0 rounded-8 border border-warning bg-warning-color px-2 py-4 text-caption text-warning"
              >
                재학생 인증 필요
              </Flex>
            )}
          </Avatar>
          <Spacing size={16} />
          <h4 className="relative text-h4">
            {nickname}
            <Icon
              id={`16-reliability-${reliabilityLevel.toLowerCase()}`}
              className="absolute -right-22 top-0"
            />
          </h4>
          <Spacing size={4} />
          <Flex className="h-18 gap-4 text-caption text-sign-tertiary" align="start">
            <Flex className="gap-4" align="center">
              <Icon id="16-school" width={16} height={16} />
              <span>{school}</span>
            </Flex>
            <Divider direction="vertical" className="h-12" />
            <Flex className="gap-4" align="center">
              <Icon id="16-male" width={16} height={16} />
              <span>{gender === 'MAIL' ? '남' : '여'}</span>
            </Flex>
            <Divider direction="vertical" className="h-12" />
            <Flex className="gap-4" align="center">
              <Icon id="16-birth" width={16} height={16} />
              <span>{age}세</span>
            </Flex>
          </Flex>
          <Spacing size={16} />
          <Flex className="gap-4" wrap="wrap" justify="center">
            {personalities.map((personality) => (
              <Tag
                key={personality}
                size="small"
                className="border-none bg-brand-color text-primary-dark"
              >
                {personalityList.find((it) => it.keywordInEnglish === personality)?.keyword}
              </Tag>
            ))}
          </Flex>
          <Spacing size={20} />
          <Divider />
          <Spacing size={24} />
        </Flex>

        <Flex className="px-20" direction="column">
          <Flex className="w-full px-4" align="end">
            <span className="text-secondary text-subtitle-3">신뢰도 지표 </span>
            <span className="text-caption text-sign-caption">
              {format(new Date(joinAt), '(yyyy.MM.dd 가입)')}
            </span>
          </Flex>
          <Spacing size={8} />
          <Flex direction="column" className="h-70 rounded-8 bg-sub px-12">
            <Spacing size={16} />
            <div className="h-16 overflow-hidden rounded-10 bg-white">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${reliabilityScore / 3}%` }}
                transition={{ duration: 0.5 }}
                className="h-full rounded-10 bg-primary"
              />
            </div>
            <Spacing size={8} />
            <Flex className="text-caption" justify="between">
              {reliabilities.map((reliabilityItem) => (
                <Flex
                  key={reliabilityItem.id}
                  className={cn({ 'opacity-30': reliabilityLevel !== reliabilityItem.name })}
                >
                  <Icon
                    id={`16-reliability-${reliabilityItem.name.toLowerCase()}`}
                    width={16}
                    height={16}
                  />
                  <Spacing size={2} direction="horizontal" />
                  <p>{reliabilityItem.name}</p>
                </Flex>
              ))}
            </Flex>
            <Spacing size={12} />
          </Flex>

          <Spacing size={16} />

          <Flex align="center">
            <div className="flex flex-grow flex-col items-center justify-center">
              <p className="text-caption text-sign-tertiary">누적 모임</p>
              <h4 className="text-h4 text-sign-secondary">5회</h4>
            </div>
            <Divider direction="vertical" className="h-12" />
            <Link
              className="flex flex-grow flex-col items-center text-center"
              href={isPrivateProfile ? `${pathname}/praise` : ''}
              scroll={false}
            >
              <p className="text-caption text-sign-tertiary">받은 칭찬</p>
              <h4 className="text-h4 text-sign-brand">{praiseCount}회</h4>
            </Link>
            <Divider direction="vertical" className="h-12" />
            <Link
              className="flex flex-grow flex-col items-center"
              href={isPrivateProfile ? `${pathname}/mates` : ''}
              scroll={false}
            >
              <p className="text-caption text-sign-tertiary">모임 후기</p>
              <h4 className="text-h4 text-sign-brand">{reviewCount}회</h4>
            </Link>
          </Flex>
          <Spacing size={32} />
        </Flex>
      </section>
      <section className="px-20 py-40">
        <p className="px-4 text-subtitle-3 text-sign-secondary">자기소개</p>
        <TextField as="textarea" readOnly value={introduce} className="text-paragraph-2" />
      </section>
    </>
  );
}
