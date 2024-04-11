import { usePathname } from 'next/navigation';

import MessageForm from '@/components/Form/MessageForm';
import { Spacing } from '@/components/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';

export default function ChatContent() {
  const pathname = usePathname();
  const { groupId } = useNumberParams<['groupId']>();

  return (
    <section className="bg-brand-color h-full overflow-auto">
      <Spacing size={48} />

      <div className="flex flex-col gap-10">
        <div className="h-300 bg-primary"></div>
        <div className="h-300 bg-primary"></div>
        <div className="h-300 bg-primary"></div>
        <div className="h-300 bg-primary"></div>
        <div className="h-300 bg-primary"></div>
        <div className="h-300 bg-primary"></div>
        <div className="h-300 bg-primary"></div>
        <div className="h-300 bg-primary"></div>
      </div>

      <MessageForm />
    </section>
  );
}
