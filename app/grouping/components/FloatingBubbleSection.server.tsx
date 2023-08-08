import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';
import Link from 'next/link';

export default function FloatingBubbleSection() {
  return (
    <section className="fixed inset-x-0 bottom-80 mx-auto flex max-w-450 justify-end">
      <Link href="/grouping/create" className="relative h-50 w-50">
        <Image src="/assets/plus.svg" alt="add_icon" fill priority />
      </Link>
      <Spacing size={20} direction="horizontal" />
    </section>
  );
}
