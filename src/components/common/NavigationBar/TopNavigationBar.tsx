import { Spacing } from '../Spacing';

interface TopNavigationBarProps {
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
  isSpacing?: boolean;
}

export default function TopNavigationBar({ leftNode, rightNode, isSpacing = true }: TopNavigationBarProps) {
  return (
    <>
      <div className="fixed inset-x-0 z-50 mx-auto max-w-450 bg-transparent px-20">
        <header className="flex h-48 items-center justify-between text-subtitle-1">
          {leftNode ? leftNode : <div />}
          {rightNode ? rightNode : <div />}
        </header>
      </div>

      {isSpacing && <Spacing size={60} />}
    </>
  );
}
