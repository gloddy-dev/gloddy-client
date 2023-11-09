import NotiCard from './components/NotiCard.client';
import NotificationHeader from './components/NotificationHeader';
import { serverTranslation } from '@/app/i18n';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { ItemList } from '@/components/List';
import { ComponentProps } from 'react';

const DUMMY_DATA: Array<ComponentProps<typeof NotiCard>['notiData']> = [
  {
    title: '모임 참여 인원으로 승인되었습니다.',
    imageUrl: '/images/dummy_image.png',
    date: new Date().toISOString(),
    isRead: false,
  },
  {
    title: '1시간 뒤 모임이 진행됩니다. 준비는 되었나요?',
    imageUrl: '/images/dummy_image.png',
    date: new Date(Date.now() - 6000000).toISOString(),
    isRead: true,
  },
  {
    title: '모임이 취소되었습니다.',
    imageUrl: '/images/dummy_image.png',
    date: new Date(Date.now() - 86400000 * 2).toISOString(),
    isRead: false,
  },
  {
    title: '신규 인원이 회원 님의 모임에 지원하였습니다.',
    imageUrl: '/images/dummy_image.png',
    date: new Date(Date.now() - 86400000 * 20).toISOString(),
    isRead: true,
  },
];

interface NotificationPageProps {
  params: {
    lng: string;
  };
}

export default async function NotificationPage({ params: { lng } }: NotificationPageProps) {
  const { i18n } = await serverTranslation(lng, 'common');

  return (
    <>
      <NotificationHeader />

      <ItemList
        data={DUMMY_DATA}
        renderItem={(data) => <NotiCard notiData={data} />}
        hasDivider={false}
        renderEmpty={() => (
          <Flex direction="column" justify="center" align="center" className="my-80 gap-8">
            <Icon id="48-cancel" width={48} height={48} />
            <p className="text-sign-tertiary">
              {i18n.language === 'ko' ? '알림이 없습니다.' : 'No notifications.'}
            </p>
          </Flex>
        )}
      />
    </>
  );
}
