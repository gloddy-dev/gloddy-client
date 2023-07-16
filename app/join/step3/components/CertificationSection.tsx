import { InputType } from '../type';
import { BottomFixedButton } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { BottomSheet } from '@/components/common/Modal';
import { regexr } from '@/constants/regexr';
import { useRouter } from 'next/navigation';
import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

interface BottomSheetFormProps {
  isModalOpen: boolean;
  closeModal: () => void;
  register: UseFormRegister<InputType>;
  handleSubmit: UseFormHandleSubmit<InputType>;
  certificateNumber: number;
}

export default function CertificationSection({
  isModalOpen,
  closeModal,
  register,
  handleSubmit,
  certificateNumber,
}: BottomSheetFormProps) {
  const router = useRouter();

  const onSubmitCertificateNumber: SubmitHandler<InputType> = (data: InputType) => {
    // 인증번호 확인
    console.log(data);
    router.push('/join/step4');
  };

  return (
    <BottomSheet isModalOpen={isModalOpen} onClose={closeModal} snap={400} isRightButton>
      <section className="text-20 font-700">
        <p>회원님의 이메일로 </p>
        <p>인증번호를 전송하였습니다.</p>
      </section>

      <form onSubmit={handleSubmit(onSubmitCertificateNumber)}>
        <section className="my-20">
          <Input
            label="인증번호"
            register={register('certificateNumber', {
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
          disabled={('' + certificateNumber)?.length < 6 || certificateNumber === undefined}
          type="submit"
        />
      </form>
    </BottomSheet>
  );
}
