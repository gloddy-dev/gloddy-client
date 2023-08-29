import { useCreateGroupContext } from './CreateGroupContext';
import { Button, ButtonGroup } from '@/components/Button';
import { NumberSwipePicker } from '@/components/common/SwipePicker';
import { BottomSheet } from '@/components/Modal';

interface MaxUserBottomSheetProps {
  onClose: () => void;
}

export default function MaxUserBottomSheet({ onClose }: MaxUserBottomSheetProps) {
  const { watch, setValue } = useCreateGroupContext();

  return (
    <BottomSheet
      snapPoints={[300, 0]}
      onClose={onClose}
      title="모임 인원"
      isTapOutsideToClose
      disableDrag
    >
      <div className="relative h-full">
        <NumberSwipePicker
          setNumberValue={(value: number) => setValue('maxUser', value, { shouldDirty: true })}
          numberValue={watch('maxUser')}
        />
      </div>
      <ButtonGroup>
        <Button
          onClick={() => {
            if (!watch('maxUser')) setValue('maxUser', 1);
            onClose();
          }}
        >
          완료
        </Button>
      </ButtonGroup>
    </BottomSheet>
  );
}
