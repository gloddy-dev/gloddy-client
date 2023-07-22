import InputForm from './components/InputForm';
import WriteTopNavigationBar from './components/WriteTopNavigationBar';
import { WriteContextProvider } from './WriteContext';

export default function WritePage() {
  return (
    <main className="h-full px-20">
      <WriteContextProvider>
        <WriteTopNavigationBar />
        <InputForm />
      </WriteContextProvider>
    </main>
  );
}
