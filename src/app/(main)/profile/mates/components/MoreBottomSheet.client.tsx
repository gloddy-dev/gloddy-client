import MatesDeleteModal from './MatesDeleteModal.client';
import { Mate } from '@/apis/profile';
import { BottomSheet } from '@/components/Modal';
import { useModal } from '@/hooks/useModal';

interface MoreBottomSheetProps {
  mateData: Mate;
  onCloseBottomSheet: () => void;
}

export default function MoreBottomSheet({ mateData, onCloseBottomSheet }: MoreBottomSheetProps) {
  const { open, close } = useModal();

  return (
    <BottomSheet snap={150} onClose={onCloseBottomSheet} isTapOutsideToClose>
      <p
        className="py-12 text-subtitle-2 text-sign-secondary"
        onClick={() => {
          open(
            <MatesDeleteModal
              mateData={mateData}
              onCloseModal={close}
              onCloseBottomSheet={onCloseBottomSheet}
            />
          );
        }}
      >
        삭제하기
      </p>
    </BottomSheet>
  );
}
