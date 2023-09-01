import { FloatAddButton } from '@/components/Button';
import Link from 'next/link';

export default function CreateGroupButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto h-70 max-w-450">
      <Link href="/grouping/create">
        <FloatAddButton className="absolute bottom-90 right-20 ml-auto" />
      </Link>
    </div>
  );
}
