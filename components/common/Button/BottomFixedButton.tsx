import Button, { type ButtonProps } from './Button';
import BottomFixedDiv from '../BottomFixedDiv';

export default function BottomFixedButton({ ...props }: ButtonProps) {
  return (
    <BottomFixedDiv>
      <Button {...props} />
    </BottomFixedDiv>
  );
}
