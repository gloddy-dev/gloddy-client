'use client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { BottomFixedButton } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { DateSwipePicker } from '@/components/common/SwipePicker';
import { BottomSheet } from '@/components/Modal';
import { TextField } from '@/components/TextField';
import useModalStore from '@/store/useModalStore';

import type { DateType } from '@/types';

export default function BirthdaySection() {
  const { modalName, openModal, closeModal } = useModalStore();
  const { watch, setValue } = useJoinContext();
  const birth = watch('birth');

  const isOpen = modalName === 'birthday';

  const isBirthDayEntered = !!birth.year && !!birth.month && !!birth.date;

  return (
    <section>
      <p className="text-14">생년월일</p>
      <Spacing size={5} />
      <TextField
        placeholder="생년월일을 선택해주세요."
        onClick={() => openModal('birthday')}
        value={isBirthDayEntered ? `${birth.year} ${birth.month} ${birth.date}` : ''}
        readOnly
      />

      <BottomSheet
        isOpen={isOpen}
        snap={400}
        onClose={closeModal}
        isRightButton
        text={
          <p className="font-500 text-18 text-gray7">
            {modalName === 'birthday' ? '생년월일' : '성별'}
          </p>
        }
        disableDrag
      >
        <DateSwipePicker
          dateValue={birth}
          setDateValue={(birth: DateType) => setValue('birth', birth)}
        />
        <BottomFixedButton
          text="다음"
          disabled={!isBirthDayEntered}
          onClick={() => openModal('gender')}
        />
      </BottomSheet>
    </section>
  );
}
