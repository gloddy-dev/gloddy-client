import { useCreateGroupContext } from './CreateGroupContext';
import { Button, ButtonGroup } from '@/components/Button';
import Calendar from '@/components/common/Calendar';
import { TimeSwipePicker } from '@/components/common/SwipePicker';
import { Divider } from '@/components/Divider';
import { BottomSheet } from '@/components/Modal';
import { TimeType } from '@/types';

interface MeetingDateBottomSheetProps {
  onClose: () => void;
}

export default function MeetingDateBottomSheet({ onClose }: MeetingDateBottomSheetProps) {
  const { watch, setValue } = useCreateGroupContext();

  return (
    <BottomSheet
      snapPoints={[650, 0]}
      onClose={onClose}
      title="모임 일시"
      isTapOutsideToClose
      disableDrag
    >
      <div className="relative h-full">
        <div>
          <Calendar
            dateValue={watch('meetDate')}
            setDateValue={(date: Date) => setValue('meetDate', date, { shouldDirty: true })}
          />
          <Divider size={20} />
          <TimeSwipePicker
            timeValue={watch('time')}
            setTimeValue={(time: TimeType) => setValue('time', time, { shouldDirty: true })}
          />
        </div>
      </div>
      <ButtonGroup>
        <Button onClick={onClose}>완료</Button>
      </ButtonGroup>
    </BottomSheet>
  );
}
