import { convertShowMember } from '../../../util';
import { useFeedbackContext } from '../../components/FeedbackProvider';
import Membercard from '../../components/Membercard';
import TitleSection from '../../components/TitleSection';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/Checkbox';
import { Divider } from '@/components/Divider';

import type { EstimateResponse } from '@/apis/groups';

interface Step2Props {
  onNextClick: () => void;
  groupMemberList: EstimateResponse['groupMemberList'];
}
export default function Step2({ onNextClick, groupMemberList }: Step2Props) {
  const { setValue, watch } = useFeedbackContext();
  const { t } = useTranslation('meeting');
  const { t: tc } = useTranslation('common');

  const showMemberList = convertShowMember(watch('praiseInfos'), groupMemberList);

  return (
    <div>
      <TitleSection message={t('evaluation.whoBestPartner')} step={2} />
      <Divider thickness="thick" />
      {showMemberList.map((member) => (
        <div className="p-20" key={member.userId}>
          <Membercard member={member}>
            <Membercard.Right>
              <CircleCheckbox
                onClick={() => setValue('mateInfo.userId', member.userId)}
                checked={watch('mateInfo.userId') === member.userId}
              />
            </Membercard.Right>
          </Membercard>
        </div>
      ))}
      <ButtonGroup>
        <Button onClick={onNextClick} disabled={!watch('mateInfo.userId')}>
          {tc('next')}
        </Button>
      </ButtonGroup>
    </div>
  );
}
