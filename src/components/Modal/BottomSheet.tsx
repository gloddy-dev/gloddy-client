import Image from 'next/image';
import { useRef } from 'react';
import Sheet, { type SheetRef } from 'react-modal-sheet';

interface BottomSheetProps {
  isOpen: boolean;
  snap: number;
  children: React.ReactNode;
  onClose: () => void;
  disableDrag?: boolean;
  title?: React.ReactNode;
  isLeftButton?: boolean;
  isRightButton?: boolean;
  isTapOutsideToClose?: boolean;
  handleLeftButtonClick?: () => void;
}

export default function BottomSheet({
  children,
  isOpen,
  handleLeftButtonClick,
  onClose,
  snap,
  title,
  disableDrag = false,
  isLeftButton = false,
  isRightButton = false,
  isTapOutsideToClose = false,
}: BottomSheetProps) {
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <Sheet
      ref={ref}
      isOpen={isOpen}
      onClose={onClose}
      snapPoints={[snap, 0]}
      initialSnap={0}
      disableDrag={disableDrag}
      className="fixed inset-x-0 m-auto max-w-450"
      tweenConfig={{
        ease: 'easeInOut',
        duration: 0.5,
      }}
    >
      <Sheet.Backdrop
        className="fixed inset-x-0 m-auto max-w-450 !bg-[rgba(0,0,0,0.6)]"
        onTap={isTapOutsideToClose ? onClose : () => {}}
      />
      <Sheet.Container className="!rounded-t-30 bg-white px-20 pt-16">
        <Sheet.Header className="relative h-50 items-center justify-center">
          {isLeftButton && (
            <Image
              alt="close"
              src="/assets/arrow_back.svg"
              width={10}
              height={10}
              className="absolute inset-y-0 left-0 m-auto"
              onClick={() => (handleLeftButtonClick ? handleLeftButtonClick() : snapTo(1))}
            />
          )}
          <div className="flex h-full items-center text-subtitle-1">{title}</div>
          {isRightButton && (
            <Image
              alt="close"
              src="/icons/24/close.svg"
              width={30}
              height={30}
              onClick={onClose}
              className="absolute inset-y-0 right-0 m-auto"
            />
          )}
        </Sheet.Header>
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
