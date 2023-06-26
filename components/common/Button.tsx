interface ButtonProps {
  text: string;
  onClick?: () => void;
  color?: "blue" | "orange";
}
import { clsx } from "clsx";

export default function Button({ text, onClick, color = "blue" }: ButtonProps) {
  return (
    <div
      className={clsx(
        "w-full h-[3.75rem] rounded-xl text-center flex justify-center items-center text-white font-bold",
        color === "blue" ? "bg-blue" : "bg-orange"
      )}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
