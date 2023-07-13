'use client';
import { Button } from '@/components/common/Button';

export default function ApplyButton() {
  const handleApplyClick = () => {
    // TODO: 지원서 작성 페이지로 이동
  };

  return (
    <div className="fixed inset-x-0 bottom-0 m-auto max-w-450">
      <div className="p-20">
        <Button text="지원하기" onClick={handleApplyClick} />
      </div>
    </div>
  );
}
