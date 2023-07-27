import AgreeSection from './AgreeForm.client';
import SchoolSection from './SchoolSection.client';

export default function InputForm() {
  return (
    <form>
      <SchoolSection />
      <AgreeSection />
    </form>
  );
}
