interface TitleTextMessageProps {
  text: string;
}
export function TitleTextMessage({ text }: TitleTextMessageProps) {
  return <div className="text-24 font-700 leading-[2.5rem] mb-30">{text}</div>;
}
