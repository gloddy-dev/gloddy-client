'use client';
import { useJoinContext } from '../../../components/JoinContext';
import { BottomFixedButton } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { BottomSheet } from '@/components/common/Modal';
import GenderSwipePicker from '@/components/common/SwipePicker/GenderSwipePicker';
import useModalStore from '@/store/useModalStore';

export default function GenderBirthdayForm() {
  const { modalName, openModal, closeModal } = useModalStore();
  const { watch, setValue } = useJoinContext();
  const gender = watch('gender');

  const isOpen = modalName === 'gender';

  const handleNextButtonClick = () => {
    if (!gender) setValue('gender', '남성');
    closeModal();
  };

  return (
    <form className="flex flex-col gap-5">
      <p className="text-14">성별</p>
      <Input
        placeholder="성별을 선택해주세요."
        onClick={() => openModal('gender')}
        value={gender}
        readOnly
      />
      <BottomSheet
        isOpen={isOpen}
        snap={400}
        onClose={closeModal}
        isRightButton
        text={<p className="font-500 text-18 text-gray7">성별</p>}
        disableDrag
      >
        <GenderSwipePicker
          genderValue={gender}
          setGenderValue={(value) => setValue('gender', value)}
        />
        <BottomFixedButton text="완료" onClick={handleNextButtonClick} />
      </BottomSheet>
    </form>
  );
}
