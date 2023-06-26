interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "default" | "login";
}

export default function Button({
  text,
  onClick,
  type = "default",
}: ButtonProps) {
  return (
    <div
      className="w-full bg-main h-[3.75rem] rounded-xl text-center flex justify-center items-center text-white font-bold"
      onClick={onClick}
    >
      {text}
    </div>
  );
}
