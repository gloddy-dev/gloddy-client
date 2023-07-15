import InputSection from './InputArea.server';
import { CreateMeetingRequestType } from '../../type';
import { BottomFixedButton } from '@/components/common/Button';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import useModalState from '@/store/useModalStatus';
import { UseFormSetValue } from 'react-hook-form';

interface LocationSectionProps {
  value: string;
  setValue: UseFormSetValue<CreateMeetingRequestType>;
}

export default function LocationSection({ value, setValue }: LocationSectionProps) {
  const { modalName, openModal, closeModal } = useModalState();

  return (
    <>
      <InputSection
        title="모임 장소"
        onClick={() => openModal('meetingLocation')}
        value={value}
        placeholder="모임 장소를 설정해주세요."
      />

      <BottomUpModal
        isModalOpen={modalName === 'meetingLocation'}
        snap={500}
        handleLeftButtonClick={() => openModal('meetingLocation')}
        onClose={closeModal}
        isRightButton
        text={<div className="text-18">모임 장소</div>}
      >
        <div className="relative h-full">
          <div></div>
        </div>
        <BottomFixedButton text="다음" onClick={() => openModal('meetingNumber')} />
      </BottomUpModal>
    </>
  );
}
