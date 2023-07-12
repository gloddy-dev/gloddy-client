interface AuthTitleTextMessageProps {
  text: string;
}
export function AuthTitleTextMessage({ text }: AuthTitleTextMessageProps) {
  return <div className="leading-2.5 mb-30 text-24 font-700">{text}</div>;
}
