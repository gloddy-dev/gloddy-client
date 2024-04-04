import { Footer } from '@/components/Footer';
import { StrictPropsWithChildren } from '@/types';

export default function MainLayout({ children }: StrictPropsWithChildren) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
