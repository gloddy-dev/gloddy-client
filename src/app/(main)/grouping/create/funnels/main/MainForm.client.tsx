import InputSection from './InputSection.client';
import SettingSection from './SettingSection.client';
import UploadSection from './UploadSection.client';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';

interface MainFormProps {
  onSelectMeetDate: () => void;
}

export default function MainForm({ onSelectMeetDate }: MainFormProps) {
  return (
    <>
      <UploadSection />
      <InputSection />
      <Divider thickness="thick" />
      <SettingSection onSelectMeetDate={onSelectMeetDate} />
      <Spacing size={60} />
      <ButtonGroup>
        <Button type="submit">완료</Button>
      </ButtonGroup>
    </>
  );
}
