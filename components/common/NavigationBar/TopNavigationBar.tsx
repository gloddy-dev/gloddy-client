interface TopNavigationBarProps {
  leftNode?: React.ReactNode;
  text?: string;
  rightNode?: React.ReactNode;
}

export default function TopNavigationBar({ leftNode, text, rightNode }: TopNavigationBarProps) {
  return (
    <div className="flex h-60 items-center justify-between">
      {leftNode ? leftNode : <div />}
      {text ? <div className="font-500">{text}</div> : <div />}
      {rightNode ? rightNode : <div />}
    </div>
  );
}
