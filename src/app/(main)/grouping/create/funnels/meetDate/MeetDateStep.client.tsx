import CalendarSection from './CalendarSection.client';
import TimeSection from './TimeSection.client';
import { Button, ButtonGroup } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';

interface MeetDateStepProps {
  onDone: () => void;
}

export default function MeetDateStep({ onDone }: MeetDateStepProps) {
  return (
    <>
      <CalendarSection />
      <Divider thickness="thick" />
      <TimeSection />
      <Spacing size={60} />
      <ButtonGroup>
        <Button onClick={onDone}>완료</Button>
      </ButtonGroup>
    </>
  );
}
