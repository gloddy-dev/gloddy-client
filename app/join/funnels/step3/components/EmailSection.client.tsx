import { useJoinContext } from '@/app/join/components/JoinContext';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { regexr } from '@/constants/regexr';
import cn from '@/utils/cn';
import Image from 'next/image';

export default function EmailSection() {
  const {
    register,
    formState: { errors },
  } = useJoinContext();
  return (
    <section>
      <Input
        label="ID"
        register={register('schoolInfo.email', {
          required: true,
          pattern: regexr.email,
        })}
      />
      <div
        className={cn('font-500 flex justify-center text-13 text-orange', {
          invisible: !errors.schoolInfo?.email,
        })}
      >
        <Image alt="alert" src="/assets/alert.svg" width={10} height={30} />
        <Spacing size={5} direction="horizontal" />
        <span>학교 이메일을 다시 확인해주세요.</span>
      </div>
    </section>
  );
}
