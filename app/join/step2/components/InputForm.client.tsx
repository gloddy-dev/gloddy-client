'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import useJoin from '@/store/useJoin';

type InputType = {
  school: string;
};

const DUMMY_SEARCH_RESULT_LIST = [
  {
    id: 1,
    name: '경희대학교 서울캠퍼스',
    address: '서울특별시 동대문구 경희대로 26',
  },
  {
    id: 2,
    name: '경희주유소',
    address: '서울특별시 동대문구 경희대로 26',
  },
  {
    id: 3,
    name: '경희주유소',
    address: '서울특별시 동대문구 경희대로 26',
  },
];

export default function InputForm() {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<InputType>();

  const { setJoinValue } = useJoin();

  const onSubmit = (data: InputType) => {
    setJoinValue({ school: data.school });
    router.push('/join/step3');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="학교"
        register={register('school', {
          required: true,
        })}
      />

      <section>
        {DUMMY_SEARCH_RESULT_LIST.map((searchResult) => (
          <div key={searchResult.id} className="border-b-[0.5px] border-b-gray6 p-20">
            <div className="text-14">{searchResult.name}</div>
            <div className="text-12 text-gray2">{searchResult.address}</div>
          </div>
        ))}
      </section>

      <Button text="완료" type="submit" className="absolute bottom-0" disabled={!watch('school')} />
    </form>
  );
}
