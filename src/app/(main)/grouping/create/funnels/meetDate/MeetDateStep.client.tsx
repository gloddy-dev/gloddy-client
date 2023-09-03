import CalendarSection from './CalendarSection.client';
import TimeSection from './TimeSection.client';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';

interface MeetDateStepProps {
  onDone: () => void;
}

export default function MeetDateStep({ onDone }: MeetDateStepProps) {
  return (
    <>
      <CalendarSection />
      <Divider thickness="thick" />
      <TimeSection type="from" />
      <Spacing size={60} />
      <ButtonGroup>
        <Button onClick={onDone}>완료</Button>
      </ButtonGroup>
    </>
  );
}
