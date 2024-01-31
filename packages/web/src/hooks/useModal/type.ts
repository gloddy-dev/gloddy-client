export type CreateModalElement = (props: {
  isOpen: boolean;
  close: () => void;
  exit: () => void;
}) => JSX.Element;
