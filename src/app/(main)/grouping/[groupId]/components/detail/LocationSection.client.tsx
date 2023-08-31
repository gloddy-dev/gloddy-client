'use client';

import { useGetGroupDetail } from '@/apis/groups';
import { Spacing } from '@/components/common/Spacing';
import { Toast } from '@/components/Modal';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';
import Image from 'next/image';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function LocationSection() {
  const { groupId } = useNumberParams<['groupId']>();
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { placeName, placeLatitude, placeLongitude, placeAddress } = groupDetailData;

  const { open } = useModal({ delay: 2000 });

  const handleClipboardClick = () => {
    navigator.clipboard
      .writeText(placeAddress)
      .then(() => open(<Toast>주소가 복사되었습니다.</Toast>))
      .catch(() => open(<Toast>주소 복사에 실패했습니다.</Toast>));
  };

  return (
    <section>
      <h2 className="pl-4 text-subtitle-3 text-sign-secondary">모임 위치</h2>
      <Spacing size={4} />
      <div className="relative rounded-8 bg-divider" onClick={handleClipboardClick}>
        <Image
          src="/icons/24/copy.svg"
          alt="copy"
          width={24}
          height={24}
          className="absolute right-12 top-12 z-10"
        />
        <Map
          center={{
            lat: +placeLatitude,
            lng: +placeLongitude,
          }}
          className="aspect-video rounded-t-8"
          level={4}
          draggable={false}
        >
          <MapMarker
            position={{
              lat: +placeLatitude,
              lng: +placeLongitude,
            }}
          />
        </Map>
        <div className="p-16">
          <p>
            <span className="text-subtitle-2">{placeName}</span>
            {/* <span className="pl-4 text-caption text-sign-sub">호프, 요리주점</span> */}
          </p>
          <Spacing size={2} />
          <p className="text-paragraph-2 text-sign-secondary">{placeAddress}</p>
        </div>
      </div>
    </section>
  );
}
