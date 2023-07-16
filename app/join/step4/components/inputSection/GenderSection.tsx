import { BottomFixedButton } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { BottomUpModal } from '@/components/common/Modal';
import GenderSwipePicker from '@/components/common/SwipePicker/GenderSwipePicker';
import useModalStore from '@/store/useModalStore';
import { GenderType } from '@/types';

interface GenderInputSectionProps {
  value: string;
  setValue: (value: GenderType) => void;
}
export default function GenderSection({ value, setValue }: GenderInputSectionProps) {
  const { modalName, openModal, closeModal } = useModalStore();

  const isModalOpen = modalName === 'gender';

  const handleNextButtonClick = () => {
    if (!value) setValue('남성');
    closeModal();
  };

  return (
    <section className="flex flex-col gap-5">
      <p className="text-14">성별</p>
      <Input
        placeholder="성별을 선택해주세요."
        onClick={() => openModal('gender')}
        value={value}
        readOnly
      />
      <BottomUpModal
        isModalOpen={isModalOpen}
        snap={400}
        onClose={closeModal}
        isRightButton
        text={<p className="font-500 text-18 text-gray7">성별</p>}
        disableDrag
      >
        <GenderSwipePicker genderValue={value} setGenderValue={setValue} />
        <BottomFixedButton text="완료" onClick={handleNextButtonClick} />
      </BottomUpModal>
    </section>
  );
}
