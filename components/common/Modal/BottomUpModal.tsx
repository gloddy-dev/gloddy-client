import { useRef, useState } from 'react';
import Sheet, { SheetRef } from 'react-modal-sheet';
import ModalWrapper from './ModalWrapper';

interface BottomUpModalProps {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
  children: React.ReactNode;
}

export default function BottomUpModal({ children, isOpened, setIsOpened }: BottomUpModalProps) {
  const ref = useRef<SheetRef>();

  return (
    <div>
      {isOpened && <ModalWrapper />}
      <Sheet
        ref={ref}
        isOpen={isOpened}
        onClose={() => setIsOpened(false)}
        snapPoints={[300]}
        initialSnap={0}
        disableDrag
        className="animate-slideUp"
        onSnap={(snapIndex) => console.log('> Current snap point index:', snapIndex)}
        onOpenStart={() => console.log('open start')}
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
