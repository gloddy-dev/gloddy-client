import { forwardRef } from 'react';
import ModalWrapper from './ModalWrapper';
import Button, { type ButtonProps } from '@/components/common/Button';

interface ConfirmModalProps {
  isModalOpen: boolean;
  forwardedRef?: React.Ref<HTMLDivElement>;
  children?: React.ReactNode;
}

function ConfirmModal({ isModalOpen, forwardedRef, children }: ConfirmModalProps) {
  if (!isModalOpen) return null;

  return (
    <>
      <ModalWrapper />
      <div ref={forwardedRef} className="absolute z-10 w-300 rounded-10 bg-white px-16 pb-15 pt-30">
        {children}
      </div>
    </>
  );
}

interface ModalContentProps {
  okButtonProps: ButtonProps;
  cancelButtonProps: ButtonProps;
  children?: React.ReactNode;
}

function ModalContent({ okButtonProps, cancelButtonProps, children }: ModalContentProps) {
  return (
    <div className="p-25">
      {children}
      <div className="mt-25 flex flex-col gap-8">
        <Button {...okButtonProps} />
        <Button {...cancelButtonProps} />
      </div>
    </div>
  );
}

const confirmModalRef = forwardRef<HTMLDivElement, ConfirmModalProps>(
  (props, ref): JSX.Element => (
    <ConfirmModal {...props} forwardedRef={ref}>
      {props.children}
    </ConfirmModal>
  )
);

export default Object.assign(confirmModalRef, {
  Content: ModalContent,
});
