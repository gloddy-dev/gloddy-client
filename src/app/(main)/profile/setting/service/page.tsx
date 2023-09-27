import Service from './components/Service';
import ServiceHeader from './components/ServiceHeader';
import { PageAnimation } from '@/components/PageAnimation';
import { getLangauage } from '@/utils/getLanguage';

export default async function page() {
  const lng = await getLangauage();

  return (
    <>
      <ServiceHeader />
      <PageAnimation>
        <Service lng={lng} />
      </PageAnimation>
    </>
  );
}
