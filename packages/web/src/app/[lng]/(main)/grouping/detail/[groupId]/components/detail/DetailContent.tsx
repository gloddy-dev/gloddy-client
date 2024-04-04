'use client';
import { usePathname } from 'next/navigation';

import LocationSection from './LocationSection';
import MemberSection from './MemberSection';
import TimeSection from './TimeSection';

import { useGetGroupDetail } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import useAppRouter from '@/hooks/useAppRouter';
import { useNumberParams } from '@/hooks/useNumberParams';

export default function DetailContent() {
  const { t } = useTranslation('groupDetail');
  const { groupId } = useNumberParams<['groupId']>();
  const pathname = usePathname();
  const { push } = useAppRouter();
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { isApplyWaited, myGroup } = groupDetailData;

  return (
    <>
      <MemberSection {...groupDetailData} />
      <TimeSection {...groupDetailData} />
      <LocationSection {...groupDetailData} />
      {!myGroup && (
        <ButtonGroup>
          <Button onClick={() => push(`${pathname}/apply`)} disabled={isApplyWaited}>
            {t(isApplyWaited ? 'details.wait' : 'details.join')}
          </Button>
        </ButtonGroup>
      )}
    </>
  );
}
