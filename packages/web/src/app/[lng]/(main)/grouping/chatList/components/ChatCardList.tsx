'use client';

import ChatCard from './ChatItem';
import { chatList } from './dummy';

import { useTranslation } from '@/app/i18n/client';
import { Empty } from '@/components/Empty';
import { ItemList } from '@/components/List';

export default function ChatCardList() {
  const { t } = useTranslation('grouping');

  return (
    <>
      <ItemList
        data={chatList}
        renderItem={(chat) => <ChatCard chatData={chat} />}
        renderEmpty={() => <Empty message={t('noGroup')} />}
      />
      <div />
    </>
  );
}
