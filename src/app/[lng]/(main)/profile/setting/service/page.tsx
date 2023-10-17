import Service from './components/Service';
import ServiceHeader from './components/ServiceHeader';
import { PageAnimation } from '@/components/PageAnimation';

interface PageProps {
  params: {
    lng: string;
  };
}

export default function page({ params: { lng } }: PageProps) {
  return (
    <>
      <ServiceHeader />
      <PageAnimation>
        <Service lng={lng} />
      </PageAnimation>
    </>
  );
}
