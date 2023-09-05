import { useJoinContext } from '@/app/(sub)/join/components/JoinContext.client';
import { Button, ButtonGroup } from '@/components/Button';
import { DateSwipePicker } from '@/components/common/SwipePicker';
import { BottomSheet } from '@/components/Modal';

import type { DateType } from '@/types';

interface BirthdayBottomSheetProps {
  onClose: () => void;
  isOpen: boolean;
}
export default function BirthdayBottomSheet({ onClose, isOpen }: BirthdayBottomSheetProps) {
  const { setValue, watch } = useJoinContext();
  const birth = watch('birth');
  const handleCloseClick = () => {
    if (!watch('birth').year) setValue('birth.year', '1980년');
    if (!watch('birth').month) setValue('birth.month', '1월');
    if (!watch('birth').date) setValue('birth.date', '1일');
    onClose();
  };

  return (
    <BottomSheet
      snapPoints={[400, 0]}
      onClose={onClose}
      title="생년월일"
      disableDrag
      isOpen={isOpen}
    >
      <DateSwipePicker
        dateValue={birth}
        setDateValue={(birth: DateType) => setValue('birth', birth)}
      />
      <ButtonGroup>
        <Button onClick={handleCloseClick}>다음</Button>
      </ButtonGroup>
    </BottomSheet>
  );
}
