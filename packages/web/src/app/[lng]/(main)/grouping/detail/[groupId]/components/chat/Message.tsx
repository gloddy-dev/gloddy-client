import { Avatar } from '@/components/Avatar';
import cn from '@/utils/cn';

interface MessageProps {
  name?: string;
  message: string;
  time: string;
  myMessage: boolean;
}

export default function Message({ myMessage, name, message, time }: MessageProps) {
  return (
    <div className={cn(`flex gap-12 ${myMessage && 'justify-end'}`)}>
      {!myMessage && (
        <Avatar
          imageUrl={'/images/approve_character.png'}
          size={'small'}
          iconVariant={'education'}
        />
      )}
      <div className="flex flex-col gap-4">
        {!myMessage && <span className="text-sign-tertiary text-paragraph-2">{name}</span>}
        <div className={cn(`flex gap-4 ${myMessage && 'flex-row-reverse'}`)}>
          <div
            className={cn(
              `max-w-230 rounded-md p-8 ${myMessage ? 'bg-primary-light rounded-tr-0' : 'rounded-tl-0 bg-white'}`
            )}
          >
            <span className="text-sign-primary">{message}</span>
          </div>
          <div className="text-caption text-sign-sub mt-auto">{time}</div>
        </div>
      </div>
    </div>
  );
}
