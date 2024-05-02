interface InfoMessage {
  message: string;
}

export default function InfoMessage({ message }: InfoMessage) {
  return (
    <div className={'bg-gray4/20 mx-auto w-fit rounded-full'}>
      <span className="text-paragraph-2 text-sign-tertiary my-8 px-12 py-4">{message}</span>
    </div>
  );
}
