import InputSection from './InputSection.client';
import SettingSection from './SettingSection.client';
import UploadSection from './UploadSection.client';
import { useCreateGroupContext } from '../../components/CreateGroupContext';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';

import type { CreateGroupContextValue } from '../../type';
import type { SubmitHandler } from 'react-hook-form';

interface MainStepProps {
  onSelectMeetDate: () => void;
  onSubmit: SubmitHandler<CreateGroupContextValue>;
}

export default function MainStep({ onSelectMeetDate, onSubmit }: MainStepProps) {
  const { handleSubmit } = useCreateGroupContext();

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
