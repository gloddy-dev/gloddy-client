import { Button, ButtonGroup } from '@/components/Button';
import { BottomSheet } from '@/components/Modal';

interface LocationBottomSheetProps {
  onClose: () => void;
}

export default function LocationBottomSheet({ onClose }: LocationBottomSheetProps) {
  return (
    <BottomSheet snapPoints={[500, 0]} onClose={onClose} title="모임 장소" isTapOutsideToClose>
      <div className="relative h-full">
        <div></div>
      </div>
      <ButtonGroup>
        <Button onClick={onClose}>완료</Button>
      </ButtonGroup>
    </BottomSheet>
  );
}
