import AgreeSection from './AgreeForm.client';
import EmailSection from './EmailForm.client';

export default function InputForm() {
  return (
    <form>
      <EmailSection />
      <AgreeSection />
    </form>
  );
}
