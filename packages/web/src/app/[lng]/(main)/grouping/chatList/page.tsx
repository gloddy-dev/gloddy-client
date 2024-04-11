import ChatCardList from './components/ChatCardList';
import ChatListHeader from './components/ChatListHeader';

import { serverTranslation } from '@/app/i18n';

interface ChatListPageProps {
  params: {
    lng: string;
  };
}

export default async function ChatListPage({ params: { lng } }: ChatListPageProps) {
  const { t } = await serverTranslation(lng, 'grouping');

  return (
    <>
      <ChatListHeader title={t('chat.listHeader')} />
      <ChatCardList />
    </>
  );
}
