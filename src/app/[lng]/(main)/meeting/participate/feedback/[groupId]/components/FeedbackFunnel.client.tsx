'use client';

import FeedbackHeader from './FeedbackHeader';
import Step1 from '../funnels/step1/Step1';
import Step2 from '../funnels/step2/Step2';
import Step3 from '../funnels/step3/Step3';
import { useGetEstimate } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { useFunnel } from '@/hooks/useFunnel';
import { useNumberParams } from '@/hooks/useNumberParams';

export default function FeedbackSection() {
  const { Funnel, prevStep, nextStep } = useFunnel(['1', '2', '3']);
  const { t } = useTranslation('meeting');
  const { groupId } = useNumberParams();
  const {
    data: { groupMemberList },
  } = useGetEstimate(groupId);

  return (
    <Funnel>
      <Funnel.Step name="1">
        <FeedbackHeader message={t('evaluation.evaluateGroup')} />
        <Step1 onNextClick={nextStep} groupMemberList={groupMemberList} />
      </Funnel.Step>
      <Funnel.Step name="2">
        <FeedbackHeader message={t('evaluation.bestPartner')} onPrevClick={prevStep} />
        <Step2 onNextClick={nextStep} groupMemberList={groupMemberList} />
      </Funnel.Step>
      <Funnel.Step name="3">
        <FeedbackHeader message={t('evaluation.bestPartner')} onPrevClick={prevStep} />
        <Step3 groupMemberList={groupMemberList} />
      </Funnel.Step>
    </Funnel>
  );
}
