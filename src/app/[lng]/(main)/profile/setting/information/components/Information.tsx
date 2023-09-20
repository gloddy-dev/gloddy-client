import { en, ko } from '@/constants/service';

interface InformationProps {
  lng: string;
}
export default function Information({ lng }: InformationProps) {
  return (
    <div className="p-20 text-paragraph-2 text-sign-tertiary ">
      {lng === 'ko' ? <p>{ko}</p> : <p>{en}</p>}
    </div>
  );
}
