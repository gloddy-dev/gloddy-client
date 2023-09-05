import BottomSheet from './BottomSheet.client';
import { Flex } from '../Layout';
import { Children, isValidElement } from 'react';

import type { StrictPropsWithChildren } from '@/types';

interface MoreBottomSheetProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function MoreBottomSheet({
  onClose,
  children,
  isOpen,
}: StrictPropsWithChildren<MoreBottomSheetProps>) {
  const validChildren = Children.toArray(children).filter(
    (child) => isValidElement(child) && (child.props as ListItemProps).isShown
  );

  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={[68 + validChildren.length * 48 + 16, 0]}
      isTapOutsideToClose
      disableDrag
      isOpen={isOpen}
    >
      <Flex direction="column" className="h-full pb-16">
        {children}
      </Flex>
    </BottomSheet>
  );
}

interface ListItemProps {
  label: string;
  isShown?: boolean;
  onClick?: () => void;
}

function ListItem({ label, isShown, onClick }: ListItemProps) {
  return (
    isShown && (
      <div className="h-48 py-12 text-subtitle-2 text-sign-secondary" onClick={onClick}>
        {label}
      </div>
    )
  );
}

MoreBottomSheet.ListItem = ListItem;
