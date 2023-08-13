import { Spacing } from '../common/Spacing';

interface HeaderProps {
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
  isSpacing?: boolean;
}

export default function Header({ leftNode, rightNode, isSpacing = true }: HeaderProps) {
  return (
    <>
      <div className="fixed inset-x-0 z-50 mx-auto max-w-450 bg-transparent px-20">
        <header className="flex h-48 items-center justify-between text-subtitle-1">
          {leftNode ? leftNode : <div />}
          {rightNode ? rightNode : <div />}
        </header>
      </div>

      {isSpacing && <Spacing size={48} />}
    </>
  );
}
