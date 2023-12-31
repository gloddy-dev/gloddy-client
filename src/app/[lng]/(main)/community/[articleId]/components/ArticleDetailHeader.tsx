'use client';
import { Suspense } from 'react';

import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import useAppRouter from '@/hooks/useAppRouter';
import { useNumberParams } from '@/hooks/useNumberParams';

interface ArticleDetailHeaderProps {
  titleCategory: string;
}

export default function ArticleDetailHeader({ titleCategory }: ArticleDetailHeaderProps) {
  const { back } = useAppRouter();
  const { groupId } = useNumberParams<['groupId']>();

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={() => back()}>
          <Icon id="24-arrow_back" />
        </IconButton>
        <Suspense>
          <p className="w-full truncate">{titleCategory}</p>
        </Suspense>
      </Header.Left>
      <Header.Right>
        <Suspense>
          {/*<ManageButtonAction groupId={groupId} />*/}
          {/*<MoreButtonAction groupId={groupId} />*/}
        </Suspense>
      </Header.Right>
    </Header>
  );
}
