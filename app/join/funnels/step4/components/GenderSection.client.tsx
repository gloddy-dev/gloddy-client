'use client';
import { useJoinContext } from '../../../components/JoinContext';
import { BottomFixedButton } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { BottomSheet } from '@/components/common/Modal';
import GenderSwipePicker from '@/components/common/SwipePicker/GenderSwipePicker';
import useModalStore from '@/store/useModalStore';
import { useState } from 'react';

export default function GenderSection() {
  const { modalName, openModal, closeModal } = useModalStore();
  const { watch, setValue, getFieldState } = useJoinContext();
  const gender = watch('gender');

  return (
    <section className="flex flex-col gap-5">
      <p className="text-14">성별</p>
      <Input
        placeholder="성별을 선택해주세요."
        onClick={() => openModal('gender')}
        value={gender === '선택없음' ? '' : gender}
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
            setGenderValue={(value) => setValue('gender', value, { shouldTouch: true })}
          />
        </div>
        <BottomFixedButton
          text="완료"
          onClick={() => {
            if (gender === '선택없음') setValue('gender', '남성');
            closeModal();
          }}
        />
      </BottomSheet>
    </section>
  );
}
