import { Reply } from '@/apis/community';
import ReplyItem from '@/app/[lng]/(main)/community/[articleId]/components/ReplyItem';
import { ItemList } from '@/components/List';

interface ReplyListProps {
  replyList: Reply[];
  articleWriterId: number;
}

export default function ReplyList({ replyList, articleWriterId }: ReplyListProps) {
  return (
    <ItemList
      data={replyList}
      renderItem={(reply: Reply) => <ReplyItem reply={reply} articleWriterId={articleWriterId} />}
      renderEmpty={() => <div></div>}
    />
  );
}
