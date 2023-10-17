import { Spacing } from '@/components/Spacing';

interface SubtitleSectionProps {
  text: string;
}
export default function SubtitleSection({ text }: SubtitleSectionProps) {
  return (
    <div className="px-20">
      <Spacing size={4} direction="horizontal" />
      <span className="text-subtitle-3 text-sign-secondary">{text}</span>
    </div>
  );
}
