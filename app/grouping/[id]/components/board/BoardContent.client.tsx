'use client';
import ArticleCardList from './ArticleCardList.client';
import Notice from './Notice.client';
import { GroupResponse } from '@/apis/groups/type';
import { BottomFixedButton } from '@/components/common/Button';
import { Spacing } from '@/components/common/Spacing';

interface BoardContentProps {
  myGroup: GroupResponse['myGroup'];
}

export default function BoardContent({ myGroup }: BoardContentProps) {
  return (
    <>
      <Notice />
      <Spacing size={15} />
      <ArticleCardList />
      {myGroup && (
        <>
          <Spacing size={100} />
          <BottomFixedButton text="글쓰기" />
        </>
      )}
    </>
  );
}
