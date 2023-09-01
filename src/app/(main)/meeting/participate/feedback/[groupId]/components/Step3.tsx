import TitleSection from './TitleSection';
import { Button, ButtonGroup } from '@/components/Button';
import { Divider } from '@/components/Divider';

export default function Step3() {
  return (
    <div>
      <TitleSection message="최괴의 짝꿍은 누구였나요?" step={2} />
      <Divider thickness="thick" />
      <ButtonGroup>
        <Button>완료</Button>
      </ButtonGroup>
    </div>
  );
}
