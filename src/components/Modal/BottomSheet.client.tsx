'use client';
import { IconButton } from '../Button';
import { Header } from '../Header';
import { Icon } from '../Icon';
import { Spacing } from '../Spacing';
import { usePathname } from 'next/navigation';
import { forwardRef, useEffect, useRef } from 'react';
import Sheet, { type SheetRef } from 'react-modal-sheet';

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
  const pageRef = useRef(false);
  useEffect(() => {
    const goBack = () => {
      pageRef.current = true;
      onClose();
    };
    history.pushState({ page: 'modal' }, document.title);
    window.addEventListener('popstate', goBack);
    return () => {
      window.removeEventListener('popstate', goBack);
      if (!pageRef.current) {
        history.back();
      }
    };
  }, [onClose]);

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
      className="fixed inset-x-0 m-auto max-w-450"
      {...props}
    >
      <Sheet.Backdrop
        className="fixed inset-x-0 mx-auto max-w-450 !bg-sign-cto/[.38]"
        onTap={isTapOutsideToClose ? onClose : () => {}}
      />
      <Sheet.Container className="bg-dimmed-38 !rounded-t-24">
        <Sheet.Header>
          <div className="absolute inset-x-0 top-4 mx-auto h-4 w-80 rounded-8 bg-sign-caption" />
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
