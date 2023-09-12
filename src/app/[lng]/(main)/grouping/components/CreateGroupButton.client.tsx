'use client';
import { FloatAddButton } from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function CreateGroupButton() {
  const router = useRouter();

  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto h-70 max-w-450">
      <FloatAddButton
        className="absolute bottom-90 right-20 ml-auto"
        onClick={() => router.push('/grouping/create')}
      />
    </div>
  );
}
