import LocationSection from './LocationSection.server';
import MemberSection from './MemberSection.server';
import TimeSection from './TimeSection.server';
import { Spacing } from '@/components/common/Spacing';

interface DetailContentProps {
  location: string;
  time: string;
}

export default function DetailContent({ location, time }: DetailContentProps) {
  return (
    <>
      <MemberSection />
      <Spacing size={18} />
      <TimeSection time={time} />
      <Spacing size={18} />
      <LocationSection location={location} />
      <Spacing size={100} />
    </>
  );
}
