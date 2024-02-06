import { en, ko } from '@/constants/information';

interface InformationProps {
  lng: string;
}
export default function Information({ lng }: InformationProps) {
  return (
    <div className="text-paragraph-2 text-sign-tertiary p-20 ">
      {lng === 'ko' ? <p>{ko}</p> : <p>{en}</p>}
    </div>
  );
}
