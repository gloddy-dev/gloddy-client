import Image from 'next/image';
import { useRef } from 'react';
import Sheet, { SheetRef } from 'react-modal-sheet';

import ModalWrapper from './ModalWrapper';

interface BottomUpModalProps {
  isModalOpen: boolean;
  handleLeftButtonClick?: () => void;
  onClose: () => void;
  children: React.ReactNode;
  snap: number;
  disableDrag?: boolean;
  isLeftButton?: boolean;
  text?: React.ReactNode;
  isRightButton?: boolean;
}

export default function BottomUpModal({
  children,
  isModalOpen,
  handleLeftButtonClick,
  onClose,
  snap,
  disableDrag = false,
  isLeftButton = false,
  text,
  isRightButton = false,
}: BottomUpModalProps) {
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <div>
      {isModalOpen && <ModalWrapper />}
      <Sheet
        ref={ref}
        isOpen={isModalOpen}
        onClose={onClose}
        snapPoints={[snap, 0]}
        initialSnap={0}
        disableDrag={disableDrag}
        className="animate-slideUp"
      >
        <Sheet.Container className="!rounded-t-30">
          <div className="flex w-full justify-center">
            <div className="relative h-full w-[26.25rem]  rounded-t-30 bg-white">
              <Sheet.Content>
                <div className="p-25">
                  <Sheet.Header>
                    <div className="relative h-50 items-center justify-center">
                      {isLeftButton && (
                        <Image
                          alt="close"
                          src="/assets/arrow_back.svg"
                          width={10}
                          height={10}
                          className="absolute inset-y-0  left-0 m-auto"
                          onClick={() =>
                            handleLeftButtonClick ? handleLeftButtonClick() : snapTo(1)
                          }
                        />
                      )}
                      <div className="flex h-full items-center justify-center">{text}</div>
                      {isRightButton && (
                        <Image
                          alt="close"
                          src="/assets/close.svg"
                          width={30}
                          height={30}
                          onClick={() => snapTo(1)}
                          className="absolute inset-y-0 right-0 m-auto"
                        />
                      )}
                      <div />
                    </div>
                  </Sheet.Header>
                  {children}
                </div>
              </Sheet.Content>
            </div>
          </div>
        </Sheet.Container>
      </Sheet>
    </div>
  );
}
