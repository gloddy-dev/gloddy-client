import TitleSection from './TitleSection';
import { Button, ButtonGroup } from '@/components/Button';
import { Divider } from '@/components/Divider';

interface Step2Props {
  onNextClick: () => void;
}
export default function Step2({ onNextClick }: Step2Props) {
  return (
    <div>
      <TitleSection message="최괴의 짝꿍은 누구였나요?" step={2} />
      <Divider thickness="thick" />
      <ButtonGroup>
        <Button onClick={onNextClick}>다음</Button>
      </ButtonGroup>
    </div>
  );
}
