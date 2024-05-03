import { usePathname } from 'next/navigation';

import GreetingMessage from './GreetingMessage';
import InfoMessage from './InfoMessage';
import Message from './Message';

import { Spacing } from '@/components/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';

export default function ChatContent() {
  const pathname = usePathname();
  const { groupId } = useNumberParams<['groupId']>();

  return (
    <section className="bg-brand-color h-full overflow-auto">
      <Spacing size={20} />
      <GreetingMessage />

      <div className="mx-12 flex flex-col gap-8">
        <InfoMessage message="2023년 12월 30일" />
        <Message message="응가가 마렵군" name="asd" myMessage={false} time={'오전 05:30'} />
        <Message message="응가가 마렵군" myMessage={true} time={'오전 05:31'} />
      </div>
    </section>
  );
}
