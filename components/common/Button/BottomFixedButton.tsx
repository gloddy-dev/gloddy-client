import BomttomFixedDiv from '../BomttomFixedDiv';
import Button, { type ButtonProps } from './Button';

export default function BottomFixedButton({ ...props }: ButtonProps) {
  return (
    <BomttomFixedDiv>
      <Button {...props} />
    </BomttomFixedDiv>
  );
}
