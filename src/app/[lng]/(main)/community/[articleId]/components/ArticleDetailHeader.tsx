'use client';
import { Suspense } from 'react';

import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import useAppRouter from '@/hooks/useAppRouter';

interface ArticleDetailHeaderProps {
  title: string;
}

export default function ArticleDetailHeader({ title }: ArticleDetailHeaderProps) {
  const { back } = useAppRouter();

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={() => back()}>
          <Icon id="24-arrow_back" />
        </IconButton>
        <Suspense>
          <p className="w-full truncate">{title}</p>
        </Suspense>
      </Header.Left>
      <Header.Right>
        <Suspense>
          <IconButtonAction />
        </Suspense>
      </Header.Right>
    </Header>
  );
}

function IconButtonAction() {
  return (
    <IconButton size="large">
      <Icon id="24-more" />
    </IconButton>
  );
}
