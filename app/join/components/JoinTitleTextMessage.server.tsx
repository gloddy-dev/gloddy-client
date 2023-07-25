interface JoinTitleTextMessageProps {
  text: string;
}
export default function JoinTitleTextMessage({ text }: JoinTitleTextMessageProps) {
  return <div className="leading-2.5 mb-30 text-24 font-700">{text}</div>;
}
