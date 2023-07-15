interface BottomFixedProps {
  children: React.ReactNode;
}
export default function BomttomFixed({ children }: BottomFixedProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 m-auto max-w-450">
      <div className="px-20 pb-20">{children}</div>
    </div>
  );
}
