import { en, ko } from '@/constants/service';

interface ServiceProps {
  lng: string;
}
export default function Service({ lng }: ServiceProps) {
  return (
    <div className="p-20 text-paragraph-2 text-sign-tertiary ">
      {lng === 'ko' ? <p>{ko}</p> : <p>{en}</p>}
    </div>
  );
}
