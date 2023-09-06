import Information from './components/Information';
import InformationHeader from './components/InformationHeader';
import { PageAnimation } from '@/components/PageAnimation';

export default function page() {
  return (
    <>
      <InformationHeader />
      <PageAnimation>
        <Information />
      </PageAnimation>
    </>
  );
}
