import Image from 'next/image';

import saveImage from '@/utils/saveImage';

interface CircleImageFrameProps {
  setProfileImage: (imageData: string) => void;
  imgRef: React.RefObject<HTMLInputElement>;
  profileImage: string;
}

export default function CircleImageFrame({
  setProfileImage,
  imgRef,
  profileImage,
}: CircleImageFrameProps) {
  return (
    <section className="relative flex h-160 items-center justify-center">
      <label className="relative h-100 w-100" htmlFor="profileImage">
        {profileImage ? (
          <Image
            alt="profile"
            src={profileImage}
            priority
            fill
            className="rounded-full object-cover"
          />
        ) : (
          <div className="h-100 w-100 rounded-full bg-gray5" />
        )}
        <Image
          alt="plus"
          src="/assets/plus.svg"
          width={20}
          height={30}
          className="absolute bottom-5 right-5"
        />
      </label>

      <input
        className="hidden"
        type="file"
        accept="image/*"
        id="profileImage"
        onChange={() => saveImage(setProfileImage, imgRef)}
        ref={imgRef}
      />
    </section>
  );
}
