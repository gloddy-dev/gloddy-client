'use client';

import { useState } from 'react';
import Glider from 'react-glider';

import ApplyCard from './ApplyCard.client';

import { useGetApplies } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { useNumberParams } from '@/hooks/useNumberParams';

import 'glider-js/glider.min.css';

export default function ManageDetail() {
  const { t } = useTranslation('groupDetail');
  const { groupId } = useNumberParams<['groupId']>();

  const { data: appliesData } = useGetApplies(groupId);
  const { applies, totalCount } = appliesData;

  const [currentApplication, setCurrentApplication] = useState(1);

  const handleSlideChange = (event: any) => {
    const newSlideIndex = event.detail.slide;
    console.log(newSlideIndex);
    setCurrentApplication(newSlideIndex);
  };

  if (!totalCount) {
    return (
      <Flex direction="column" justify="center" align="center" className="my-80 gap-8">
        <Icon id="48-cancel" width={48} height={48} />
        <p className="text-sign-tertiary">{t('manage.empty')}</p>
      </Flex>
    );
  }

  return (
    <div>
      <Spacing size={32} />
      <Flex justify="between" align="end" className="px-20">
        <p className="text-h4 text-sign-cto">{t('manage.description')}</p>
        <Flex align="center">
          <Icon id="16-application" width={16} height={16} />
          <p className="text-caption text-sign-sub">
            {currentApplication + 1}/{totalCount}
          </p>
        </Flex>
      </Flex>
      <Glider
        draggable
        slidesToShow={1}
        slidesToScroll={1}
        scrollLock
        onSlideVisible={handleSlideChange}
      >
        {applies.map((apply) => (
          <div key={apply.userId}>
            <ApplyCard apply={apply} groupId={groupId} />
          </div>
        ))}
      </Glider>
    </div>
  );
}
