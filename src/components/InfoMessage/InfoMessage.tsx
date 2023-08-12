import { Spacing } from '../common/Spacing';
import { StrictPropsWithChildren } from '@/types';
import Image from 'next/image';

export default function InfoMessage({ children }: StrictPropsWithChildren) {
  return (
    <div className="flex">
      <Image src="/icons/16/info.svg" width={20} height={20} alt="info" />
      <Spacing size={4} direction="horizontal" />
      <p className="text-caption">{children}</p>
    </div>
  );
}
