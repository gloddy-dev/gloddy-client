import { BottomFixedButton } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { BottomSheet } from '@/components/common/Modal';
import { Spacing } from '@/components/common/Spacing';
import { DateSwipePicker } from '@/components/common/SwipePicker';
import useModalStore from '@/store/useModalStore';
import { BirthdayValueType } from '@/types';

interface BirthdaySectionProps {
  setValue: (value: BirthdayValueType) => void;
  value: BirthdayValueType;
}
export default function BirthdaySection({ value, setValue }: BirthdaySectionProps) {
  const { modalName, openModal, closeModal } = useModalStore();

  const isModalOpen = modalName === 'birthday';

  const isBirthDayEntered = !!value.year && !!value.month && !!value.date;

  return (
    <section>
      <p className="text-14">생년월일</p>
      <Spacing size={5} />
      <Input
        placeholder="생년월일을 선택해주세요."
        onClick={() => openModal('birthday')}
        value={isBirthDayEntered ? `${value.year} ${value.month} ${value.date}` : ''}
        readOnly
      />

      <BottomSheet
        isModalOpen={isModalOpen}
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
          birthdayValue={value}
          setBirthdayValue={(value: BirthdayValueType) => setValue(value)}
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
