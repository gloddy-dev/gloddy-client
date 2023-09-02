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
import { format } from 'date-fns';

import type { CreateGroupContextValue } from '../../type';
import type { TimeType } from '@/types';
import type { SubmitHandler } from 'react-hook-form';

function formatTime(time: TimeType) {
  time.fromHour =
    time.fromAmPm === 'AM' ? time.fromHour : ((Number(time.fromHour) + 12) % 24).toString();
  time.toHour = time.toAmPm === 'AM' ? time.toHour : ((Number(time.toHour) + 12) % 24).toString();

  return {
    startTime: time.fromHour.padStart(2, '0') + ':' + time.fromMin.padStart(2, '0'),
    endTime: time.toHour.padStart(2, '0') + ':' + time.toMin.padStart(2, '0'),
  };
}

interface MainStepProps {
  onSelectMeetDate: () => void;
}

export default function MainStep({ onSelectMeetDate }: MainStepProps) {
  const hookForm = useCreateGroupContext();
  const { handleSubmit, formState } = hookForm;

  const { mutate: mutateCreateGroup } = usePostCreateGroup();
  const { open: openCreateModal, close: closeCreateModal } = useModal();

  const onSubmit: SubmitHandler<CreateGroupContextValue> = (data) => {
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
            meetDate: format(data.meetDate, 'yyyy-MM-dd'),
            title: data.title,
            imageUrl: data.imageUrl,
            ...formatTime(data.time),
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
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={!formState.isValid || !formState.isDirty}
        >
          완료
        </Button>
      </ButtonGroup>
    </>
  );
}
