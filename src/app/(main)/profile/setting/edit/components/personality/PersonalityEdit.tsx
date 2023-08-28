import InputForm from './components/InputForm.client';
import PersonalityEditHeader from './components/PersonalityEditHeader';
import { Spacing } from '@/components/common/Spacing';

interface PersonalityEditPageProps {
  onClose: () => void;
}

export default function PersonalityEditPage({ onClose }: PersonalityEditPageProps) {
  return (
    <>
      <PersonalityEditHeader onClose={onClose} />
      <div className="px-20 pb-16 pt-32 text-h3 text-sign-cto">
        사용자님의 성격을
        <br />
        선택해주세요!
      </div>
      <p className="px-20 text-subtitle-2 text-sign-tertiary">3개 이상 선택해주세요.</p>
      <Spacing size={16} />
      <InputForm onClose={onClose} />
    </>
  );
}
