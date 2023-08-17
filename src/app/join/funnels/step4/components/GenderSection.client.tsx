'use client';
import { useJoinContext } from '../../../components/JoinContext';
import { BottomFixedButton } from '@/components/common/Button';
import GenderSwipePicker from '@/components/common/SwipePicker/GenderSwipePicker';
import { BottomSheet } from '@/components/Modal';
import { TextField } from '@/components/TextField';
import useModalStore from '@/store/useModalStore';

export default function GenderSection() {
  const { modalName, openModal, closeModal } = useModalStore();
  const { watch, setValue } = useJoinContext();
  const gender = watch('gender');

  return (
    <section className="flex flex-col gap-5">
      <p className="text-14">성별</p>
      <TextField
        placeholder="성별을 선택해주세요."
        onClick={() => openModal('gender')}
        value={gender ?? ''}
        readOnly
      />
      <BottomSheet
        isOpen={modalName === 'gender'}
        snap={400}
        onClose={closeModal}
        isRightButton
        text={<p className="font-500 text-18 text-gray7">성별</p>}
        disableDrag
      >
        <div className="relative h-full">
          <GenderSwipePicker
            genderValue={gender}
            setGenderValue={(value) => setValue('gender', value)}
          />
        </div>
        <BottomFixedButton
          text="완료"
          onClick={() => {
            if (!gender) setValue('gender', '남성');
            closeModal();
          }}
        />
      </BottomSheet>
    </section>
  );
}
