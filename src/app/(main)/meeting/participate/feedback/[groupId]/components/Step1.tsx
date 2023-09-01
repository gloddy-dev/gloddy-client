import { IconButton } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Header } from '@/components/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Step1Props {
  onNextClick: () => void;
}
export default function Step1({ onNextClick }: Step1Props) {
  const router = useRouter();
  return (
    <div>
      <Header className="px-4">
        <Header.Left>
          <IconButton onClick={() => router.push('/meeting/participate')} size="large">
            <Image src="/icons/24/arrow_back.svg" width={24} height={24} alt="back" />
          </IconButton>
          <p>모임 평가하기</p>
        </Header.Left>
      </Header>
      <div className="px-20">
        <h3 className="text-h3">모임에서 어땠나요?</h3>
      </div>
      <Divider thickness="thick" />
    </div>
  );
}
