import CardContent from './CardContent.server';
import CardFooter from './CardFooter.client';
import CardHeader from './CardHeader.client';
import { Spacing } from '@/components/common/Spacing';

type CardType = {
  id: number;
  name: string;
  writeDate: string;
  content: string;
  likeCount: number;
  commentCount: number;
  isLeader?: boolean;
};

interface CardListProps {
  cardList: CardType[];
}

export default function CardList({ cardList }: CardListProps) {
  return (
    <div className="flex flex-col gap-15">
      {cardList.map((item) => (
        <Card key={item.id} card={item} />
      ))}
    </div>
  );
}

interface CardProps {
  card: CardType;
}

function Card({ card }: CardProps) {
  const { name, writeDate, content, likeCount, commentCount, isLeader } = card;

  return (
    <div className="rounded-8 bg-white2">
      <div className="p-16">
        <CardHeader name={name} writeDate={writeDate} isLeader={isLeader} />
        <Spacing size={12} />
        <CardContent content={content} likeCount={likeCount} commentCount={commentCount} />
      </div>
      <CardFooter />
    </div>
  );
}
