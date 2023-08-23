'use client';

import { CreateGroupContextValue } from '../type';
import { BottomFixedButton } from '@/components/common/Button';
import { NumberSwipePicker } from '@/components/common/SwipePicker';
import { BottomSheet } from '@/components/Modal';
import { UseFormSetValue } from 'react-hook-form';

interface MaxUserBottomSheetProps {
  maxUserValue: number;
  setValue: UseFormSetValue<CreateGroupContextValue>;
  closeCurrent: () => void;
}

export default function MaxUserBottomSheet({
  maxUserValue,
  setValue,
  closeCurrent,
}: MaxUserBottomSheetProps) {
  return (
    <BottomSheet
      snap={500}
      onClose={closeCurrent}
      isRightButton
      title="모임 인원"
      isTapOutsideToClose
      disableDrag
    >
      <div className="relative h-full">
        <NumberSwipePicker
          setNumberValue={(value: number) => setValue('maxUser', value, { shouldDirty: true })}
          numberValue={maxUserValue}
        />
      </div>
      <BottomFixedButton
        text="완료"
        onClick={() => {
          if (!maxUserValue) setValue('maxUser', 1);
          closeCurrent();
        }}
      />
    </BottomSheet>
  );
}
