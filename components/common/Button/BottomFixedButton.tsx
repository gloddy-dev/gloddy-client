import Button, { type ButtonProps } from './Button';

export default function BottomFixedButton({ ...props }: ButtonProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 m-auto max-w-450">
      <div className="p-20">
        <Button {...props} />
      </div>
    </div>
  );
}
