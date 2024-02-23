'use client';
import { FloatAddButton } from '@/components/Button';
import useAppRouter from '@/hooks/useAppRouter';

export default function CreateArticleButton() {
  const { push } = useAppRouter();

  return (
    <div className="h-70 max-w-450 fixed inset-x-0 bottom-0 mx-auto">
      <FloatAddButton
        className="bottom-90 absolute right-20 ml-auto"
        onClick={() => push('/community/write')}
      />
    </div>
  );
}
