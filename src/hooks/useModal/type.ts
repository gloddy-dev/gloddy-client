export type ModalElementType = (props: {
  isOpen: boolean;
  close: () => void;
  exit: () => void;
}) => JSX.Element;
