import Service from './components/Service';
import ServiceHeader from './components/ServiceHeader';


interface PageProps {
  params: {
    lng: string;
  };
}

export default function page({ params: { lng } }: PageProps) {
  return (
    <>
      <ServiceHeader />

      <Service lng={lng} />
    </>
  );
}
