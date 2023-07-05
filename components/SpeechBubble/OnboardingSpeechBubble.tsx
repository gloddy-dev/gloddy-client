interface OnboardingSpeechBubbleProps {
  text: string;
}
export default function OnboardingSpeechBubble({ text }: OnboardingSpeechBubbleProps) {
  return (
    <div className="flex items-center flex-col h-110">
      <p className="bg-gray5 px-36 py-18 rounded-[10rem] font-700 text-lg">{text}</p>
      <div className="bg-gray5 rotate-45 w-15 h-15 -translate-y-7 rounded"></div>
    </div>
  );
}
