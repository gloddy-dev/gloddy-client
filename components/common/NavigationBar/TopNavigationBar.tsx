import { Spacing } from '../Spacing';

interface TopNavigationBarProps {
  leftNode?: React.ReactNode;
  text?: string;
  rightNode?: React.ReactNode;
  isSpacing?: boolean;
}

export default function TopNavigationBar({
  leftNode,
  text,
  rightNode,
  isSpacing = true,
}: TopNavigationBarProps) {
  return (
    <>
      <div className="fixed inset-x-0 z-50 mx-auto max-w-450 bg-inherit px-20">
        <header className=" flex h-60 items-center justify-between">
          {leftNode ? leftNode : <div />}
          {text ? <div className="font-500">{text}</div> : <div />}
          {rightNode ? rightNode : <div />}
        </header>
      </div>

      {isSpacing && <Spacing size={60} />}
    </>
  );
}
