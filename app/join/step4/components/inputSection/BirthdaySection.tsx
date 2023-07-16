import { BottomFixedButton } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { UseFormRegisterReturn } from 'react-hook-form';

interface BirthdayInputSectionProps {}
export default function BirthdaySection({}: BirthdayInputSectionProps) {
  return (
    <section>
      <p className="text-14">생년월일</p>
      <Spacing size={5} />
      <Input
        placeholder="생년월일을 선택해주세요."
        onClick={() => openModal('birthday')}
        value={
          watch('birthday').year &&
          watch('birthday').month &&
          watch('birthday').date &&
          `${watch('birthday').year} ${watch('birthday').month} ${watch('birthday').date}`
        }
        readOnly
      />

      <BottomUpModal
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
        {modalName === 'birthday' && (
          <DateSwipePicker
            birthdayValue={watch('birthday')}
            setBirthdayValue={(value: BirthdayValueType) => setValue('birthday', value)}
          />
        )}
        <BottomFixedButton
          text={modalName === 'birthday' ? '다음' : '완료'}
          disabled={modalName === 'birthday' && !isBirthDayEntered}
          onClick={handleModalNextButton}
          className="absolute bottom-0 w-full"
        />
      </BottomUpModal>
    </section>
  );
}
