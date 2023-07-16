import { BottomFixedButton } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { UseFormRegisterReturn } from 'react-hook-form';

interface GenderInputSectionProps {}
export default function GenderSection({}: GenderInputSectionProps) {
  return (
    <section className="flex flex-col gap-5">
      <p className="text-14">성별</p>
      <Input
        placeholder="성별을 선택해주세요."
        onClick={() => openModal('gender')}
        value={watch('gender')}
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
        {modalName === 'gender' && (
          <GenderSwipePicker
            genderValue={watch('gender')}
            setGenderValue={(value: string) => setValue('gender', value)}
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
