'use client';

import { useGetGroupDetail } from '@/apis/groups';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Flex } from '@/components/Layout';
import { useNumberParams } from '@/hooks/useNumberParams';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function GroupingHeader() {
  const { groupId } = useNumberParams<['groupId']>();
  const router = useRouter();

  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { title, isCaptain } = groupDetailData;

  return (
    <Header className="px-4">
      <Header.Left>
        <Flex align="center">
          <IconButton size="large" onClick={() => router.back()}>
            <Image src="/icons/24/arrow_back.svg" alt="back" width={24} height={24} />
          </IconButton>
          <p>{title}</p>
        </Flex>
      </Header.Left>
      <Header.Right>
        <Flex align="center">
          {isCaptain && (
            <Link href={`/grouping/${groupId}/manage`}>
              <IconButton size="large">
                <Image src="/icons/24/application.svg" alt="application" width={24} height={24} />
              </IconButton>
            </Link>
          )}
        </Flex>
      </Header.Right>
    </Header>
  );
}
