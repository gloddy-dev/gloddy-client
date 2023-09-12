import InputSection from './InputSection.client';
import SettingSection from './SettingSection.client';
import UploadSection from './UploadSection.client';
import { useCreateGroupContext } from '../../components/CreateGroupContext';
import CreateModal from '../../components/CreateModal.client';
import { Button, ButtonGroup } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Toast } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { useModal } from '@/hooks/useModal';
import { format } from 'date-fns';

import type { CreateGroupContextValue } from '../../type';
import type { TimeType } from '@/types';
import type { SubmitHandler } from 'react-hook-form';

function validateDate(date: Date, time: TimeType) {
  if (!date || !time.fromHour || !time.fromMin || !time.fromAmPm) {
    return false;
  }

  const currentDate = new Date();
  const meetDate = new Date(
    format(date, 'yyyy-MM-dd') +
      ' ' +
      (+time.fromHour + (time.fromAmPm === 'AM' ? 0 : 12)) +
      ':' +
      time.fromMin
  );

  return currentDate < meetDate;
}

interface MainStepProps {
  onSelectMeetDate: () => void;
  onCreateSubmit: SubmitHandler<CreateGroupContextValue>;
}

export default function MainStep({ onSelectMeetDate, onCreateSubmit }: MainStepProps) {
  const hookForm = useCreateGroupContext();
  const { handleSubmit, watch, control } = hookForm;

  const { open: openCreateModal, exit: exitCreateModal } = useModal();
  const { open: openToast } = useModal({ delay: 2000 });

  const isAllInput = Object.values(hookForm.watch()).every((value) => {
    if (typeof value === 'object') {
      return Object.values(value).every((v) => !!v);
    }
    return !!value;
  });

  const handleCreateClick = () => {
    if (!validateDate(watch('meetDate'), watch('time'))) {
      openToast(() => <Toast>현재 시간 이후로 설정해주세요.</Toast>);
      return;
    }

    openCreateModal(() => (
      <CreateModal
        onCancelClick={exitCreateModal}
        onOkClick={() => {
          handleSubmit(onCreateSubmit)();
          exitCreateModal();
        }}
      />
    ));
  };

  return (
    <>
      <UploadSection control={control} />
      <InputSection />
      <Divider thickness="thick" />
      <SettingSection onSelectMeetDate={onSelectMeetDate} />
      <Spacing size={60} />
      <ButtonGroup>
        <Button onClick={handleCreateClick} disabled={!isAllInput}>
          완료
        </Button>
      </ButtonGroup>
    </>
  );
}
