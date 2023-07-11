interface TimeSectionProps {
  time: string;
}

export default function TimeSection({ time }: TimeSectionProps) {
  return (
    <section>
      <div className="mb-10">
        <h2 className="text-14 text-black">모임 일시</h2>
      </div>
      <div className="rounded-8 bg-gray6 p-16">
        <p className="text-14 text-black">{time}</p>
      </div>
    </section>
  );
}
