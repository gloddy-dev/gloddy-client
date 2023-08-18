'use client';
import { Header } from '@/components/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FeedbackHeaderProps {
  text: string;
}

export default function FeedbackHeader({ text }: FeedbackHeaderProps) {
  const router = useRouter();

  return (
    <Header
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
