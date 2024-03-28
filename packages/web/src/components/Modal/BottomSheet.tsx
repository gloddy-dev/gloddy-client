'use client';
import { forwardRef } from 'react';
import Sheet, { type SheetRef } from 'react-modal-sheet';

import { IconButton } from '../Button';
import { Header } from '../Header';
import { Icon } from '../Icon';
import { Spacing } from '../Spacing';

import type { StrictPropsWithChildren } from '@/types';
import type { SheetProps } from 'react-modal-sheet/dist/types';

interface BottomSheetProps extends Partial<SheetProps> {
  snapPoints: number[];
  onClose: () => void;
  title?: string;
  disableDrag?: boolean;
  isTapOutsideToClose?: boolean;
  isRightCloseIcon?: boolean;
  isOpen: boolean;
}

export default forwardRef(function BottomSheet(
  {
    snapPoints,
    onClose,
    title,
    disableDrag = false,
    isTapOutsideToClose = false,
    children,
    isRightCloseIcon = true,
    ...props
  }: StrictPropsWithChildren<BottomSheetProps>,
  ref?: React.ForwardedRef<SheetRef>
) {
  return (
    <Sheet
      ref={ref}
      onClose={onClose}
      snapPoints={snapPoints}
      initialSnap={0}
      disableDrag={disableDrag}
      tweenConfig={{
        ease: 'easeInOut',
        duration: 0.5,
      }}
      className="max-w-450 fixed inset-x-0 bottom-0 m-auto"
      {...props}
    >
      <Sheet.Backdrop
        className="max-w-450 !bg-sign-cto/[.38] fixed inset-x-0 mx-auto"
        onTap={isTapOutsideToClose ? onClose : () => {}}
      />
      <Sheet.Container className="bg-dimmed-38 !rounded-t-24">
        <Sheet.Header>
          <div className="rounded-8 bg-sign-caption absolute inset-x-0 top-4 mx-auto h-4 w-80" />
          <Spacing size={20} />
          <Header className="static bg-inherit" isSpacing={false}>
            <Header.Left className="pl-20">{title}</Header.Left>
            {isRightCloseIcon && (
              <Header.Right className="pr-4">
                <IconButton size="large" onClick={onClose}>
                  <Icon id="24-close" className="cursor-pointer" />
                </IconButton>
              </Header.Right>
            )}
          </Header>
        </Sheet.Header>
        <Sheet.Content className="px-20">{children}</Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
});
