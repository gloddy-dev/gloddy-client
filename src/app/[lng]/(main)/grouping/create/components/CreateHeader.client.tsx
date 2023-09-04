import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';
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
          <Image src="/icons/24/close.svg" alt="close" width={24} height={24} />
        </IconButton>
        {currentStep === 'main' && <p>모임 개설하기</p>}
      </Header.Left>
    </Header>
  );
}
