import { useListBoxContext } from '@/components/ListBox/ListBoxController';

interface ListBoxOptionsProps {
  options: string[];
  onSelect: (value: string) => void;
}

export default function ListBoxOptions({ options, onSelect }: ListBoxOptionsProps) {
  const { setOpen } = useListBoxContext();

  return (
    <div className="rounded-8 border-1 border-primary bg-white">
      {options.map((option) => (
        <div
          key={option}
          onClick={() => {
            onSelect(option);
            setOpen(false);
          }}
          className={'p-16'}
        >
          {option}
        </div>
      ))}
    </div>
  );
}
