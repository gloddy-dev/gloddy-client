'use client';
import SearchResultSection from './SearchResultSection.client';
import { useJoinContext } from '../../../components/JoinContext';
import { Input } from '@/components/common/Input';
import { TextField } from '@/components/TextField';

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

export default function SchoolSection() {
  const { register } = useJoinContext();

  return (
    <section>
      <TextField
        label="학교"
        register={register('schoolInfo.school', {
          required: true,
        })}
      />
      <SearchResultSection searchResultList={DUMMY_SEARCH_RESULT_LIST} />
    </section>
  );
}
