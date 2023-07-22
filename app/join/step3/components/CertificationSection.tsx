import { BottomFixedButton } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { BottomSheet } from '@/components/common/Modal';
import { regexr } from '@/constants/regexr';
import useModalStore from '@/store/useModalStore';
import { useRouter } from 'next/navigation';
import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

import type { Step3InputType } from '../type';

interface BottomSheetFormProps {
  register: UseFormRegister<Step3InputType>;
  handleSubmit: UseFormHandleSubmit<Step3InputType>;
  certificateNumber: number;
}

export default function CertificationSection({
  register,
  handleSubmit,
  certificateNumber,
}: BottomSheetFormProps) {
  const router = useRouter();
  const { closeModal, modalName } = useModalStore();

  const isOpen = modalName === 'certification';

  const onSubmitCertificateNumber: SubmitHandler<Step3InputType> = (data: Step3InputType) => {
    // 인증번호 확인
    console.log(data);
    router.push('/join/step4');
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={closeModal} snap={400} isRightButton>
      <section className="text-20 font-700">
        <p>회원님의 이메일로 </p>
        <p>인증번호를 전송하였습니다.</p>
      </section>

      <form onSubmit={handleSubmit(onSubmitCertificateNumber)}>
        <section className="my-20">
          <Input
            label="인증번호"
            {...register('certificateNumber', {
              pattern: {
                value: regexr.certificateNumber,
                message: '인증 번호를 다시 확인해주세요.',
              },
            })}
            maxLength={6}
          />
          <div className="flex justify-between p-10">
            <p className="text-14 text-gray3 underline ">재전송하기</p>
            <p className="text-orange">02:59</p>
          </div>
        </section>

        <BottomFixedButton
          text="완료"
          disabled={('' + certificateNumber)?.length < 6 || !certificateNumber}
          type="submit"
        />
      </form>
    </BottomSheet>
  );
}
