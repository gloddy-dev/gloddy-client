import { Spacing } from '@/components/common/Spacing';

interface SubtitleSectionProps {
  text: string;
}
export default function SubtitleSection({ text }: SubtitleSectionProps) {
  return (
    <div>
      <Spacing size={4} direction="horizontal" />
      <span className="text-subtitle-3 text-sign-secondary">{text}</span>
    </div>
  );
}
