import { Button, ButtonGroup } from '@/components/Button';
import { DateSwipePicker } from '@/components/common/SwipePicker';
import { BottomSheet } from '@/components/Modal';

import type { DateType } from '@/types';
import type { UseFormSetValue } from 'react-hook-form';

interface BirthdayBottomSheetProps {
  onClose: () => void;
  dateValue: DateType;
  setValue: UseFormSetValue<any>;
  isBirthDayEntered: boolean;
}
export default function BirthdayBottomSheet({
  onClose,
  dateValue,
  setValue,
  isBirthDayEntered,
}: BirthdayBottomSheetProps) {
  return (
    <BottomSheet snapPoints={[400, 0]} onClose={onClose} title="생년월일" disableDrag>
      <DateSwipePicker
        dateValue={dateValue}
        setDateValue={(birth: DateType) => setValue('birth', birth)}
      />
      <ButtonGroup>
        <Button disabled={!isBirthDayEntered} onClick={onClose}>
          다음
        </Button>
      </ButtonGroup>
    </BottomSheet>
  );
}
