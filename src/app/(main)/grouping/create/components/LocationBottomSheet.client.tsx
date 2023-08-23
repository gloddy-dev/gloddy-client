'use client';

import { BottomFixedButton } from '@/components/common/Button';
import { BottomSheet } from '@/components/Modal';

interface LocationBottomSheetProps {
  openNext: () => void;
  closeCurrent: () => void;
}

export default function LocationBottomSheet({ closeCurrent, openNext }: LocationBottomSheetProps) {
  return (
    <BottomSheet
      snap={500}
      onClose={closeCurrent}
      isRightButton
      title="모임 장소"
      isTapOutsideToClose
    >
      <div className="relative h-full">
        <div></div>
      </div>
      <BottomFixedButton text="다음" onClick={openNext} />
    </BottomSheet>
  );
}
