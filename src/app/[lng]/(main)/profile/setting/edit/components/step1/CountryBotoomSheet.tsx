import { ProfileEditState } from '../../type';
import { BottomSheet } from '@/components/Modal';
import countaryList from '@/constants/countary.json';
import Image from 'next/image';
import { Control, useController } from 'react-hook-form';

interface CountryBotoomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  control: Control<ProfileEditState>;
}

export default function CountryBotoomSheet({ isOpen, onClose, control }: CountryBotoomSheetProps) {
  const { field } = useController({
    name: 'country',
    control,
    rules: {
      required: true,
    },
  });
  const handleCountry = (country: string) => {
    console.log(country);
    field.onChange(country);
    onClose();
  };

  return (
    <BottomSheet
      onClose={onClose}
      isOpen={isOpen}
      snapPoints={[800, 0]}
      isTapOutsideToClose
      disableDrag
      title="출신 국가"
    >
      <ul className="overflow-scroll">
        {countaryList.map((country, index) => (
          <li
            key={index}
            className="flex gap-8 py-12 text-subtitle-2"
            onClick={() => handleCountry(country.countaryNameInEnglish)}
          >
            <Image
              src={country.countaryImage}
              width={24}
              height={24}
              alt={country.countaryNameInEnglish}
            />
            {country.countaryNameInEnglish}
          </li>
        ))}
      </ul>
    </BottomSheet>
  );
}
