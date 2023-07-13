import Image from 'next/image';
import Link from 'next/link';

export default function FloatingBubbleSection() {
  return (
    <section className="absolute bottom-80 right-20">
      <Link href="/grouping/create">
        <Image src="/assets/plus.svg" alt="add_icon" width={40} height={40} />
      </Link>
    </section>
  );
}
