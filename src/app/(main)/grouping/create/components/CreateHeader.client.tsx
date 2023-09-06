import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { useRouter } from 'next/navigation';

interface CreateHeaderProps {
  currentStep: 'main' | 'meetDate';
}

export default function CreateHeader({ currentStep }: CreateHeaderProps) {
  const router = useRouter();

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={() => router.back()}>
          <Icon id="24-close" />
        </IconButton>
        {currentStep === 'main' && <p>모임 개설하기</p>}
      </Header.Left>
    </Header>
  );
}
