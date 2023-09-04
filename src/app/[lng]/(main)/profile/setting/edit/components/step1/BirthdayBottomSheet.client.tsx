import { useEditContext } from '@/app/[lng]/(main)/profile/setting/edit/components/EditProvider.client';
import { Button, ButtonGroup } from '@/components/Button';
import { DateSwipePicker } from '@/components/common/SwipePicker';
import { BottomSheet } from '@/components/Modal';

import type { DateType } from '@/types';

interface BirthdayBottomSheetProps {
  onClose: () => void;
}
export default function BirthdayBottomSheet({ onClose }: BirthdayBottomSheetProps) {
  const { watch, setValue } = useEditContext();

  const birth = watch('birth');
  const isBirthDayEntered = !!birth.year && !!birth.month && !!birth.date;

  return (
    <BottomSheet snapPoints={[400, 0]} onClose={onClose} title="생년월일" disableDrag>
      <DateSwipePicker
        dateValue={birth}
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
