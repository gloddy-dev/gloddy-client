interface ModalWrapperProps {
  children?: React.ReactNode;
}

export default function ModalWrapper({ children }: ModalWrapperProps) {
  return (
    <div className="fixed left-1/2 top-0 z-10 h-full w-full max-w-[450px] -translate-x-1/2 bg-[rgba(0,0,0,0.4)]">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        {children}
      </div>
    </div>
  );
}
