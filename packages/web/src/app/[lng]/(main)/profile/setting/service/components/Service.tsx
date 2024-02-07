import { en, ko } from '@/constants/service';

interface ServiceProps {
  lng: string;
}
export default function Service({ lng }: ServiceProps) {
  return (
    <div className="text-paragraph-2 text-sign-tertiary p-20 ">
      {lng === 'ko' ? <p>{ko}</p> : <p>{en}</p>}
    </div>
  );
}
