'use client';
import SearchResultSection from './SearchResultSection.client';
import { useJoinContext } from '../../JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { SignUpRequest } from '@/apis/auth';
import { BottomFixedButton } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { useRouter } from 'next/navigation';

import type { SearchResultType } from '../type';

const DUMMY_SEARCH_RESULT_LIST: SearchResultType[] = [
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
  const { nextStep } = useFunnelContext();

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useJoinContext<SignUpRequest>();

  return (
    <form onSubmit={handleSubmit(nextStep)}>
      <Input
        label="학교"
        register={register('school', {
          required: true,
        })}
      />

      <SearchResultSection searchResultList={DUMMY_SEARCH_RESULT_LIST} />

      <BottomFixedButton text="완료" type="submit" disabled={!watch('school')} />
    </form>
  );
}
