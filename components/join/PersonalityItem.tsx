import clsx from 'clsx';

interface PersonalityItemProps {
  personality: {
    id: string;
    text: string;
  };
  isSelected: boolean;
  onClick: () => void;
}
export default function PersonalityItem({
  personality,
  isSelected,
  onClick,
}: PersonalityItemProps) {
  return (
    <div
      className={clsx(
        'flex h-50 w-4/12 flex-grow items-center justify-center rounded-full bg-blue text-16',
        {
          'bg-blue text-white': isSelected,
          'border border-gray4 bg-white text-gray4': !isSelected,
        }
      )}
      onClick={onClick}
    >
      {personality.text}
    </div>
  );
}
