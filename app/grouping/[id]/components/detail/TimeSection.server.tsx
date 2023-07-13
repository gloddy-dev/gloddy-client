import { Spacing } from '@/components/common/Spacing';

interface TimeSectionProps {
  time: string;
}

export default function TimeSection({ time }: TimeSectionProps) {
  return (
    <section>
      <h2 className="text-14">모임 일시</h2>
      <Spacing size={10} />
      <div className="rounded-8 bg-gray6 p-16">
        <p className="text-14">{time}</p>
      </div>
    </section>
  );
}
