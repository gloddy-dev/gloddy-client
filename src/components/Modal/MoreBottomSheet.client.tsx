import BottomSheet from './BottomSheet.client';
import { Flex } from '../Layout';
import { Children, isValidElement } from 'react';

import type { StrictPropsWithChildren } from '@/types';

interface MoreBottomSheetProps {
  onClose: () => void;
}

export default function MoreBottomSheet({
  onClose,
  children,
}: StrictPropsWithChildren<MoreBottomSheetProps>) {
  const validChildren = Children.toArray(children).filter(
    (child) => isValidElement(child) && (child.props as ListItemProps).label
  );

  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={[68 + validChildren.length * 48 + 16, 0]}
      isTapOutsideToClose
      disableDrag
    >
      <Flex direction="column" className="h-full pb-16">
        {children}
      </Flex>
    </BottomSheet>
  );
}

interface ListItemProps {
  label: string;
  onClick?: () => void;
}

function ListItem({ label, onClick }: ListItemProps) {
  return (
    <div className="h-48 py-12 text-subtitle-2 text-sign-secondary" onClick={onClick}>
      {label}
    </div>
  );
}

MoreBottomSheet.ListItem = ListItem;
