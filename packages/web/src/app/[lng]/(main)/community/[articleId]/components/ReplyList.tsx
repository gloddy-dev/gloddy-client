import { Reply } from '@/apis/community';
import ReplyItem from '@/app/[lng]/(main)/community/[articleId]/components/ReplyItem';
import { ItemList } from '@/components/List';
import { useBlockStore } from '@/store/useBlockStore';

interface ReplyListProps {
  replyList: Reply[];
  articleWriterId: number;
}

export default function ReplyList({ replyList, articleWriterId }: ReplyListProps) {
  const { blockCommunityReply } = useBlockStore();
  
  return (
    <ItemList
      data={replyList}
      renderItem={(reply: Reply) => {
      return !blockCommunityReply.includes(reply.childComment.id) && (<ReplyItem reply={reply} articleWriterId={articleWriterId} />)
    }}
      renderEmpty={() => <div></div>}
      className={'w-full'}
    />
  );
}
