'use client';
import NotiCard from './NotiCard.client';
import { useGetNotifications } from '@/apis/notifications';
import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { ItemList } from '@/components/List';

export default function NotificationSection() {
  const { i18n } = useTranslation('common');
  const { data } = useGetNotifications();

  return (
    <ItemList
      data={[...data.notifications].reverse()}
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
  );
}
