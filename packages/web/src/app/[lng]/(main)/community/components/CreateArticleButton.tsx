'use client';
import { FloatAddButton } from '@/components/Button';
import useAppRouter from '@/hooks/useAppRouter';

export default function CreateArticleButton() {
  const { push } = useAppRouter();

  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto h-70 max-w-450">
      <FloatAddButton
        className="absolute bottom-90 right-20 ml-auto"
        onClick={() => push('/community/write')}
      />
    </div>
  );
}
