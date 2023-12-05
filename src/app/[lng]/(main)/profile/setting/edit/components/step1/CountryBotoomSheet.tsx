import { BottomSheet } from '@/components/Modal';
import Image from 'next/image';
import { useState } from 'react';

interface CountryBotoomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Country {
  countryKR: string;
  countryEN: string;
  image: string;
}

const COUNTRY_DUMMY_DATA: Country[] = [
  {
    countryEN: 'Korea',
    countryKR: '대한민국',
    image:
      'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/36/20220318_164831540.gif',
  },
  {
    countryEN: 'Korea',
    countryKR: '대한민국',
    image:
      'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/36/20220318_164831540.gif',
  },
  {
    countryEN: 'Korea',
    countryKR: '대한민국',
    image:
      'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/36/20220318_164831540.gif',
  },
];

export default function CountryBotoomSheet({ isOpen, onClose }: CountryBotoomSheetProps) {
  const [country, setCountry] = useState<string>('Korea');

  const handleCountry = (country: string) => {
    setCountry(country);
    onClose();
  };
  return (
    <BottomSheet
      onClose={onClose}
      isOpen={isOpen}
      snapPoints={[800, 0]}
      isTapOutsideToClose
      disableDrag
    >
      <ul>
        {COUNTRY_DUMMY_DATA.map((country, index) => (
          <li
            key={index}
            className="py-12 text-subtitle-2"
            onClick={() => handleCountry(country.countryEN)}
          >
            {/* <Image src={country.image} width={24} height={24} alt={country.countryEN} /> */}
            {country.countryEN}
          </li>
        ))}
      </ul>
    </BottomSheet>
  );
}
