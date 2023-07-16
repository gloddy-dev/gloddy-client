import { BottomFixedButton } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { BottomSheet } from '@/components/common/Modal';
import { Spacing } from '@/components/common/Spacing';
import { DateSwipePicker } from '@/components/common/SwipePicker';
import useJoinStore from '@/store/useJoinStore';
import useModalStore from '@/store/useModalStore';
import { BirthdayValueType } from '@/types';

export default function BirthdaySection() {
  const { modalName, openModal, closeModal } = useModalStore();
  const { birth, setJoinValue } = useJoinStore();

  const isModalOpen = modalName === 'birthday';

  const isBirthDayEntered = !!birth.year && !!birth.month && !!birth.date;

  return (
    <section>
      <p className="text-14">생년월일</p>
      <Spacing size={5} />
      <Input
        placeholder="생년월일을 선택해주세요."
        onClick={() => openModal('birthday')}
        value={isBirthDayEntered ? `${birth.year} ${birth.month} ${birth.date}` : ''}
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
          birthdayValue={birth}
          setBirthdayValue={(birth: BirthdayValueType) => setJoinValue({ birth })}
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
