import Service from './components/Service';
import ServiceHeader from './components/ServiceHeader';
import { PageAnimation } from '@/components/PageAnimation';

export default function page() {
  return (
    <>
      <ServiceHeader />
      <PageAnimation>
        <Service />
      </PageAnimation>
    </>
  );
}
