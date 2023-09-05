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
  const { open, close } = useModal();

  return (
    <BottomSheet
      snapPoints={[130, 0]}
      onClose={onCloseBottomSheet}
      isTapOutsideToClose
      isOpen={isOpen}
    >
      <p
        className="py-12 text-subtitle-2 text-sign-secondary"
        onClick={() => {
          open(() => (
            <MatesDeleteModal
              mateData={mateData}
              onCloseModal={close}
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
