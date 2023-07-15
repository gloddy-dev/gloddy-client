import BomttomFixed from '../BottomFixed';
import Button, { type ButtonProps } from './Button';

export default function BottomFixedButton({ ...props }: ButtonProps) {
  return (
    <BomttomFixed>
      <Button {...props} />
    </BomttomFixed>
  );
}
