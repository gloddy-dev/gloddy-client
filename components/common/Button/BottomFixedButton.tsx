import Button, { ButtonProps } from './Button';

export default function BottomFixedButton({ ...rest }: ButtonProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 m-auto max-w-450">
      <div className="p-20">
        <Button {...rest} />
      </div>
    </div>
  );
}
