'use client';

import { useGetCommunityArticleDetail, usePostDeleteCommunityArticle } from '@/apis/community';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { DropDown } from '@/components/DropDown';
import { DropDownOptionType } from '@/components/DropDown/DropDown';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import useAppRouter from '@/hooks/useAppRouter';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useBlockStore } from '@/store/useBlockStore';
import { Suspense } from 'react';
import CommunityModal from './CommunityModal';

export default function ArticleDetailHeader() {
  const { back } = useAppRouter();
  const { articleId } = useNumberParams<['articleId']>();
  const { t } = useTranslation('community');
  const { data: articleData } = useGetCommunityArticleDetail(articleId);

  const title = articleData.data.article.category.name;

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={() => back()}>
          <Icon id="24-arrow_back" />
        </IconButton>
        <Suspense>
          <p className="w-full truncate">{t(`category.${title}`)}</p>
        </Suspense>
      </Header.Left>
      <Header.Right>
        <IconButtonAction />
      </Header.Right>
    </Header>
  );
}

function IconButtonAction() {
  const { t } = useTranslation('community');
  const { articleId } = useNumberParams<['articleId']>();
  const { setBlockId } = useBlockStore();
  const { back } = useAppRouter();
  const { data: articleData } = useGetCommunityArticleDetail(articleId);
  const { open: openModal, exit: closeModal } = useModal();
  const { mutate: mutateDelete } = usePostDeleteCommunityArticle(
    articleId,
    articleData.data.article.category.id
  );

  const handleBlockArticle = () => {
    openModal(() => (
      <CommunityModal
        onOkClick={() => {
          setBlockId(articleId, 'communityArticle');
          closeModal();
          back();
        }}
        onCancelClick={closeModal}
        variant='warning'
        message={t('detail.block_content')}
      />
    ));
  };

  const handleDeleteArticle = () => {
    mutateDelete();
  };

  const options: DropDownOptionType[] = [
    {
      name: t('detail.block'),
      onClick: handleBlockArticle,
    },
    {
      name: t('detail.report'),
      onClick: handleBlockArticle,
    },
    ...(articleData.data.article.isWriter
      ? [
          {
            name: t('detail.delete'),
            onClick: handleDeleteArticle,
          },
        ]
      : []),
  ];

  return (
    <DropDown options={options}>
      <IconButton size="large">
        <Icon id="24-more" />
      </IconButton>
    </DropDown>
  );
}
