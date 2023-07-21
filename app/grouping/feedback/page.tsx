import FeedbackWrapper from './components/FeedbackWrapper';
import FeedbackFormProvider from './FeedbackFormProvider';

export default function FeedbackPage() {
  return (
    <main className="px-20">
      <FeedbackFormProvider>
        <FeedbackWrapper />
      </FeedbackFormProvider>
    </main>
  );
}
