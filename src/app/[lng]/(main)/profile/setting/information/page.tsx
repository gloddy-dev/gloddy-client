import Information from './components/Information';
import InformationHeader from './components/InformationHeader';


interface PageProps {
  params: {
    lng: string;
  };
}
export default function page({ params: { lng } }: PageProps) {
  return (
    <>
      <InformationHeader />

      <Information lng={lng} />
    </>
  );
}
