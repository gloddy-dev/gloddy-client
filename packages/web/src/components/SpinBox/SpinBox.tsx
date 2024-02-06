import Button from '../Button/Button';
import { Flex } from '../Layout';

interface SpinBoxProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export default function SpinBox({ value, min, max, onChange }: SpinBoxProps) {
  const isMin = min !== undefined && value <= min;
  const isMax = max !== undefined && value >= max;

  return (
    <Flex align="center" className="rounded-8 bg-sub gap-8 p-4">
      <Button
        size="small"
        variant="solid-default"
        onClick={() => {
          onChange(value - 1);
        }}
        className="h-48 w-48"
        disabled={isMin}
      >
        -
      </Button>
      <span className="grow text-center">{value}</span>
      <Button
        size="small"
        variant="solid-default"
        onClick={() => {
          onChange(value + 1);
        }}
        className="h-48 w-48"
        disabled={isMax}
      >
        +
      </Button>
    </Flex>
  );
}
