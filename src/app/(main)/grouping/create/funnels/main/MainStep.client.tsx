import InputSection from './InputSection.client';
import SettingSection from './SettingSection.client';
import UploadSection from './UploadSection.client';
import { useCreateGroupContext } from '../../components/CreateGroupContext';
import CreateModal from '../../components/CreateModal.client';
import { usePostCreateGroup } from '@/apis/groups';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';
import { useModal } from '@/hooks/useModal';

import type { CreateGroupContextValue } from '../../type';
import type { SubmitHandler } from 'react-hook-form';

interface MainStepProps {
  onSelectMeetDate: () => void;
}

export default function MainStep({ onSelectMeetDate }: MainStepProps) {
  const { handleSubmit } = useCreateGroupContext();

  const { mutate: mutateCreateGroup } = usePostCreateGroup();
  const { open: openCreateModal, close: closeCreateModal } = useModal();

  const onSubmit: SubmitHandler<CreateGroupContextValue> = (data) => {
    console.log(data);

    openCreateModal(
      <CreateModal
        onCancelClick={closeCreateModal}
        onOkClick={() => {
          mutateCreateGroup({
            placeName: '스타벅스 천호로데오점',
            placeAddress: '서울 강동구 천호대로 1037',
            placeLatitude: '37.53777',
            placeLongitude: '127.12722',
            content: data.content,
            maxUser: data.maxUser,
            meetDate: '2021-10-10',
            startTime: '14:00',
            endTime: '16:00',
            // startTime:
            //   data.time.fromHour.padStart(2, '0') + ':' + data.time.fromMin.padStart(2, '0'),
            // endTime: data.time.toHour.padStart(2, '0') + ':' + data.time.toMin.padStart(2, '0'),
            title: data.title,

            imageUrl: data.imageUrl,
          });
        }}
      />
    );
  };

  return (
    <>
      <UploadSection />
      <InputSection />
      <Divider thickness="thick" />
      <SettingSection onSelectMeetDate={onSelectMeetDate} />
      <Spacing size={60} />
      <ButtonGroup>
        <Button onClick={handleSubmit(onSubmit)}>완료</Button>
      </ButtonGroup>
    </>
  );
}
