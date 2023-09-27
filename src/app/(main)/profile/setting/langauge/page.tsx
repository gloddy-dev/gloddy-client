import Language from './components/Language';
import LangaugeHeader from './components/LanguageHeader';
import { PageAnimation } from '@/components/PageAnimation';

export default function page() {
  return (
    <>
      <LangaugeHeader />
      <PageAnimation>
        <Language />
      </PageAnimation>
    </>
  );
}
