interface BarGraphProps {
  maxCount: number;
  count: number;
}
export default function BarGraph({ maxCount, count }: BarGraphProps) {
  return (
    <div className="h-16 rounded-10 bg-white">
      <div className="h-full rounded-10 bg-primary" />
    </div>
  );
}
