'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';

import { useGetProfileById } from '@/apis/profile';
import { useTranslation } from '@/app/i18n/client';
import { Avatar } from '@/components/Avatar';
import { Divider } from '@/components/Divider';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { NavLink } from '@/components/NavLink';
import { Spacing } from '@/components/Spacing';
import { Tag } from '@/components/Tag';
import { TextField } from '@/components/TextField';
import { personalityList } from '@/constants/personalityList';
import { reliabilities } from '@/constants/reliabilities';
import useAppRouter from '@/hooks/useAppRouter';
import cn from '@/utils/cn';

interface ProfileDetailProps {
  profileData: ReturnType<typeof useGetProfileById>['data'];
}

export default function ProfileDetailSection({ profileData }: ProfileDetailProps) {
  const pathname = usePathname();
  const params = useParams();
  const { push } = useAppRouter();
  const isPrivateProfile = !params.userId;
  const { t } = useTranslation('profile');
  const { t: tc } = useTranslation('common');

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
    participatedGroupCount,
    introduce,
    countryImage,
  } = profileData;

  function formatDate(dateList: number[]) {
    const year = dateList[0];
    const month = formatNumber(dateList[1]);
    const day = formatNumber(dateList[2]);
    return `${year}.${month}.${day}`;
  }

  function formatNumber(num: number) {
    return num < 10 ? '0' + num : num;
  }

  return (
    <>
      <section className="rounded-b-24 shadow-float bg-white">
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
                className="rounded-8 border-warning bg-warning-color text-caption text-warning absolute bottom-0 whitespace-nowrap border px-2 py-4"
                onClick={() => isPrivateProfile && push('/profile/verify')}
              >
                {t('재학생 인증 필요')}
              </Flex>
            )}
          </Avatar>
          <Spacing size={16} />
          <h4 className="text-h4 relative flex items-center gap-5">
            {countryImage && (
              <div className="relative h-16 w-24">
                <Image src={countryImage} fill className="object-fill" alt="국가" />
              </div>
            )}
            <span>{nickname}</span>
            <Icon
              id={`16-reliability-${reliabilityLevel.toLowerCase()}`}
              className="-right-22 absolute top-0"
            />
          </h4>
          <Spacing size={4} />
          <Flex className="h-18 text-caption text-sign-tertiary gap-4" align="start">
            <Flex className="gap-4" align="center">
              <Icon id="16-school" width={16} height={16} />
              <span>{school}</span>
            </Flex>
            <Divider direction="vertical" className="h-12" />
            <Flex className="gap-4" align="center">
              <Icon id="16-male" width={16} height={16} />
              <span>{gender === 'MALE' ? t('home.gender.male') : t('home.gender.female')}</span>
            </Flex>
            <Divider direction="vertical" className="h-12" />
            <Flex className="gap-4" align="center">
              <Icon id="16-birth" width={16} height={16} />
              <span>
                {age}
                {t('세')}
              </span>
            </Flex>
          </Flex>
          <Spacing size={16} />
          <Flex className="gap-4" wrap="wrap" justify="center">
            {personalities.map((personality) => (
              <Tag
                key={personality}
                size="small"
                className="bg-brand-color text-primary-dark border-none"
              >
                {personalityList.find((it) => it.keywordDTO === personality)?.emoji + ' '}
                {t(
                  'keyword.' +
                    personalityList.find((it) => it.keywordDTO === personality)?.keyword || ''
                )}
              </Tag>
            ))}
          </Flex>
          <Spacing size={20} />
          <Divider />
          <Spacing size={24} />
        </Flex>

        <Flex className="px-20" direction="column">
          <Flex className="w-full px-4" align="end">
            <span className="text-secondary text-subtitle-3">{t('home.trustScore')} </span>
            <span className="text-caption text-sign-caption">
              {joinAt && `(${formatDate(joinAt)} ${t('home.joined')})`}
            </span>
          </Flex>
          <Spacing size={8} />
          <Flex direction="column" className="h-70 rounded-8 bg-sub px-12">
            <Spacing size={16} />
            <div className="rounded-10 h-16 overflow-hidden bg-white">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${reliabilityScore / 2}%` }}
                transition={{ duration: 0.5 }}
                className="rounded-10 bg-primary h-full"
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
              <p className="text-caption text-sign-tertiary">{t('home.participatedGroupCount')}</p>
              <h4 className="text-h4 text-sign-secondary">
                {participatedGroupCount}
                {tc('time')}
              </h4>
            </div>
            <Divider direction="vertical" className="h-12" />
            <NavLink
              className="flex flex-grow flex-col items-center text-center"
              href={isPrivateProfile ? `${pathname}/praise` : ''}
              scroll={false}
            >
              <p className="text-caption text-sign-tertiary">{t('home.praiseCount')}</p>
              <h4 className="text-h4 text-sign-brand">
                {praiseCount}
                {tc('time')}
              </h4>
            </NavLink>
            <Divider direction="vertical" className="h-12" />
            <NavLink
              className="flex flex-grow flex-col items-center"
              href={isPrivateProfile ? `${pathname}/mates` : ''}
              scroll={false}
            >
              <p className="text-caption text-sign-tertiary">{t('home.reviewCount')}</p>
              <h4 className="text-h4 text-sign-brand">
                {reviewCount}
                {tc('time')}
              </h4>
            </NavLink>
          </Flex>
          <Spacing size={32} />
        </Flex>
      </section>
      <section className="px-20 py-40">
        <p className="text-subtitle-3 text-sign-secondary px-4">{t('home.selfIntro')}</p>
        <TextField
          as="textarea"
          readOnly
          value={introduce}
          className="text-paragraph-2"
          placeholder={!introduce ? t('home.noSelfIntro') : ''}
        />
      </section>
      <Spacing size={70} />
    </>
  );
}
