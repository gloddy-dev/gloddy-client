interface AuthTitleTextMessageProps {
  text: string;
}
export function AuthTitleTextMessage({ text }: AuthTitleTextMessageProps) {
  return <div className="mb-30 text-24 font-700 leading-[2.5rem]">{text}</div>;
}
