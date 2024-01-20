'use client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { formatAddress } from '../utils';
import { SchoolSearchResponse, useGetSearchSchool } from '@/apis/auth';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';

interface SearchResultProps extends React.HTMLAttributes<React.ElementType> {
  school: SchoolSearchResponse['schools'][0];
}

export default function SchoolResultList() {
  const hookForm = useJoinContext();
  const { watch, setValue } = hookForm;
  const { data } = useGetSearchSchool(watch('schoolInfo.school'));

  return (
    <div>
      {data &&
        data?.schools.map((school) => (
          <SearchResult
            school={school}
            key={school.address}
            onClick={() => setValue('schoolInfo.school', school.name)}
          />
        ))}
    </div>
  );
}

function SearchResult({ school, ...props }: SearchResultProps) {
  return (
    <Flex {...props} align="center">
      <Icon id="24-location_on" />
      <Spacing size={8} direction="horizontal" />
      <Flex className="border-b-1 border-gray6 py-12" direction="column">
        <div className="text-subtitle-2">{school.name}</div>
        <div className="text-paragraph-2 text-sign-tertiary">{formatAddress(school.address)}</div>
      </Flex>
    </Flex>
  );
}
