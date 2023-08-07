import FeedbackFunnel from './components/FeedbackFunnel';
import FeedbackFormProvider from './FeedbackContext';

export default function FeedbackPage() {
  return (
    <main className="px-20">
      <FeedbackFormProvider>
        <FeedbackFunnel />
      </FeedbackFormProvider>
    </main>
  );
}
