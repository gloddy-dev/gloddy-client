import { Divider } from '../Divider';
import { Flex } from '../Layout';
import { ComponentProps, Fragment } from 'react';

interface ItemListProps<T> extends Omit<ComponentProps<typeof Flex>, 'children'> {
  data: T[];
  renderItem: (data: T) => JSX.Element | boolean | null | undefined;
  renderEmpty?: () => JSX.Element | boolean | null | undefined;
  direction?: 'row' | 'column';
  className?: string;
  hasDivider?: boolean;
}

export default function ItemList<T>({
  data,
  renderItem,
  renderEmpty,
  direction = 'column',
  className,
  hasDivider = true,
  ...props
}: ItemListProps<T>) {
  return (
    <Flex direction={direction} className={className} {...props}>
      {data.length === 0
        ? renderEmpty?.()
        : data.map((item, index) => {
            return (
              <Fragment key={index}>
                {renderItem(item)}
                {renderItem(item) && hasDivider && index !== data.length - 1 && <Divider />}
              </Fragment>
            );
          })}
    </Flex>
  );
}
