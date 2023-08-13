import InputForm from './components/InputForm';
import WriteHeader from './components/WriteHeader';
import { WriteContextProvider } from './WriteContext';

export default function WritePage() {
  return (
    <main className="h-full px-20">
      <WriteContextProvider>
        <WriteHeader />
        <InputForm />
      </WriteContextProvider>
    </main>
  );
}
