'use client';

import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { formatAddress } from '../utils';
import { SchoolSearchResponse, useGetSearchSchool } from '@/apis/auth';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import Image from 'next/image';

export default function SchoolForm() {
  const hookForm = useJoinContext();
  const { handleSubmit, register, watch, setValue } = hookForm;
  const { nextStep } = useFunnelContext();

  const searchWord = watch('schoolInfo.school');

  const { data } = useGetSearchSchool(searchWord);

  return (
    <form onSubmit={handleSubmit(nextStep)}>
      <TextFieldController
        hookForm={hookForm}
        register={register('schoolInfo.school', {
          required: true,
          pattern: regexr.school,
        })}
        leftIcon={<Image src="/icons/24/search.svg" width={24} height={24} alt="search" />}
      />
      {data &&
        data?.schools.map((school) => (
          <SearchResult
            school={school}
            key={school.address}
            onClick={() => setValue('schoolInfo.school', school.name)}
          />
        ))}
      <ButtonGroup>
        <Button disabled={!searchWord.match(regexr.school)}>확인</Button>
      </ButtonGroup>
    </form>
  );
}

interface SearchResultProps extends React.HTMLAttributes<React.ElementType> {
  school: SchoolSearchResponse['schools'][0];
}

function SearchResult({ school, ...props }: SearchResultProps) {
  return (
    <Flex {...props}>
      <Image src="/icons/24/location_on.svg" width={24} height={24} alt="location" />
      <Spacing size={8} direction="horizontal" />
      <Flex className="border-b-1 border-gray6 py-12" direction="column">
        <div className="text-subtitle-2">{school.name}</div>
        <div className="text-paragraph-2 text-sign-tertiary">{formatAddress(school.address)}</div>
      </Flex>
    </Flex>
  );
}
