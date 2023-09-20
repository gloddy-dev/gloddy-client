import Information from './components/Information';
import InformationHeader from './components/InformationHeader';
import { PageAnimation } from '@/components/PageAnimation';

interface PageProps {
  params: {
    lng: string;
  };
}
export default function page({ params: { lng } }: PageProps) {
  return (
    <>
      <InformationHeader />
      <PageAnimation>
        <Information lng={lng} />
      </PageAnimation>
    </>
  );
}
