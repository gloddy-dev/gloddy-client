import { useRef, useState } from 'react';
import Sheet, { SheetRef } from 'react-modal-sheet';
import ModalWrapper from './ModalWrapper';

interface BottomUpModalProps {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
  children: React.ReactNode;
  snap: number;
}

export default function BottomUpModal({
  children,
  isOpened,
  setIsOpened,
  snap,
}: BottomUpModalProps) {
  const ref = useRef<SheetRef>();

  return (
    <div>
      {isOpened && <ModalWrapper />}
      <Sheet
        ref={ref}
        isOpen={isOpened}
        onClose={() => setIsOpened(false)}
        snapPoints={[snap]}
        initialSnap={0}
        disableDrag
        className="animate-slideUp"
      >
        <Sheet.Container>
          <div className="flex justify-center w-full ">
            <div className="relative h-full w-[26.25rem]  bg-white rounded-t-30 ">
              <Sheet.Content>
                <div className="p-25">{children}</div>
              </Sheet.Content>
            </div>
          </div>
        </Sheet.Container>
      </Sheet>
    </div>
  );
}
