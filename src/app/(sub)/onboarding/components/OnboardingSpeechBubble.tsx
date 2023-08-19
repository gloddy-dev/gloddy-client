interface OnboardingSpeechBubbleProps {
  text: string;
}
export default function OnboardingSpeechBubble({ text }: OnboardingSpeechBubbleProps) {
  return (
    <div className="flex h-110 flex-col items-center">
      <p className="text-lg font-700 rounded-[10rem] bg-gray5 px-36 py-18">{text}</p>
      <div className="h-15 w-15 -translate-y-7 rotate-45 rounded bg-gray5"></div>
    </div>
  );
}
