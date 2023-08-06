'use client';
import { TopNavigationBar } from '@/components/common/NavigationBar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FeedbackTopNavigationBarProps {
  text: string;
}

export default function FeedbackTopNavigationBar({ text }: FeedbackTopNavigationBarProps) {
  const router = useRouter();

  return (
    <TopNavigationBar
      text={text}
      leftNode={
        <Image
          alt="back"
          src="/assets/arrow_back.svg"
          width={8}
          height={30}
          onClick={() => router.back()}
          className="cursor-pointer"
        />
      }
    />
  );
}
