import CalendarSection from './CalendarSection.client';
import TimeSection from './TimeSection.client';
import { useCreateGroupContext } from '../../components/CreateGroupContext';
import { Button, ButtonGroup } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';

interface MeetDateStepProps {
  onDone: () => void;
}

export default function MeetDateStep({ onDone }: MeetDateStepProps) {
  const { control } = useCreateGroupContext();

  return (
    <>
      <CalendarSection control={control} />
      <Divider thickness="thick" />
      <TimeSection control={control} />
      <Spacing size={60} />
      <ButtonGroup>
        <Button onClick={onDone}>완료</Button>
      </ButtonGroup>
    </>
  );
}
