import InputForm from './components/InputForm.client';
import WriteHeader from './components/WriteHeader.client';
import { Flex } from '@/components/Layout';

export default function WritePage() {
  return (
    <Flex direction="column" className="h-full">
      <WriteHeader />
      <InputForm />
    </Flex>
  );
}
