import MatesDeleteModal from './MatesDeleteModal.client';

import { Mate } from '@/apis/profile';
import { BottomSheet } from '@/components/Modal';
import { useModal } from '@/hooks/useModal';

interface MoreBottomSheetProps {
  mateData: Mate;
  onCloseBottomSheet: () => void;
  isOpen: boolean;
}

export default function MoreBottomSheet({
  mateData,
  onCloseBottomSheet,
  isOpen,
}: MoreBottomSheetProps) {
  const { open: openModal, exit: exitModal } = useModal();

  return (
    <BottomSheet
      snapPoints={[130, 0]}
      onClose={onCloseBottomSheet}
      isTapOutsideToClose
      isOpen={isOpen}
    >
      <p
        className="text-subtitle-2 text-sign-secondary py-12"
        onClick={() => {
          openModal(() => (
            <MatesDeleteModal
              mateData={mateData}
              onCloseModal={exitModal}
              onCloseBottomSheet={onCloseBottomSheet}
            />
          ));
        }}
      >
        삭제하기
      </p>
    </BottomSheet>
  );
}
