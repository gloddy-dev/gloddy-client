'use client';
import ArticleList from './ArticleList.client';
import Notice from './Notice.client';
import { GroupDetailResponse } from '@/apis/groups/type';
import { BottomFixedButton } from '@/components/common/Button';
import { Spacing } from '@/components/common/Spacing';

interface BoardContentProps {
  myGroup: GroupDetailResponse['myGroup'];
}

export default function BoardContent({ myGroup }: BoardContentProps) {
  return (
    <>
      <Notice />
      <Spacing size={15} />
      <ArticleList />
      {myGroup && (
        <>
          <Spacing size={100} />
          <BottomFixedButton text="글쓰기" />
        </>
      )}
    </>
  );
}
