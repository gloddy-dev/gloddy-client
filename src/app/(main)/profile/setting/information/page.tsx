import Information from './components/Information';
import InformationHeader from './components/InformationHeader';
import { PageAnimation } from '@/components/PageAnimation';
import { getLangauage } from '@/utils/getLanguage';

export default async function page() {
  const lng = await getLangauage();

  return (
    <>
      <InformationHeader />
      <PageAnimation>
        <Information lng={lng} />
      </PageAnimation>
    </>
  );
}
