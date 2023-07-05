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
    <section className="flex justify-center items-center relative h-160">
      <label className="relative w-100 h-100" htmlFor="profileImage">
        {profileImage ? (
          <Image
            alt="profile"
            src={profileImage}
            priority
            fill
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-100 h-100 bg-gray5 rounded-full" />
        )}
        <Image
          alt="plus"
          src="/assets/plus.svg"
          width={20}
          height={30}
          className="absolute right-5 bottom-5"
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
