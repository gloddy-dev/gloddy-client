import InputForm from './components/InputForm';
import WriteHeader from './components/WriteHeader';
import { WriteContextProvider } from './WriteContext';

export default function WritePage() {
  return (
    <WriteContextProvider>
      <WriteHeader />
      <InputForm />
    </WriteContextProvider>
  );
}
