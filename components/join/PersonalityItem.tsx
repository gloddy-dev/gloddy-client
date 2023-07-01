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
        'h-50 bg-blue w-4/12 flex-grow flex justify-center items-center rounded-full text-16',
        {
          'bg-blue': isSelected,
          'bg-white': !isSelected,
        },
        {
          'border border-gray4': !isSelected,
        },
        {
          'text-white': isSelected,
          'text-gray4': !isSelected,
        }
      )}
      onClick={onClick}
    >
      {personality.text}
    </div>
  );
}
