'use client';

import { useGetGroupDetail } from '@/apis/groups';
import { Spacing } from '@/components/common/Spacing';
import { Toast } from '@/components/Modal';
import { GOOGLE_API_KEY } from '@/constants';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';
import { copyToClipboard } from '@/utils/copyToClipboard';
import Image from 'next/image';
import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function LocationSection() {
  const { groupId } = useNumberParams<['groupId']>();
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { placeName, placeLatitude, placeLongitude, placeAddress } = groupDetailData;

  const { open } = useModal({ delay: 2000 });

  const handleClipboardClick = () => {
    copyToClipboard(placeAddress)
      .then(() => open(() => <Toast>주소가 복사되었습니다.</Toast>))
      .catch(() => open(() => <Toast>주소 복사에 실패했습니다.</Toast>));
  };

  console.log(placeLatitude, placeLongitude);

  window.initMap = function () {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.48724, lng: 126.98195 },
      zoom: 10,
    });
    // 37.48724 126.98195
    const malls = [{ label: 'C', name: '코엑스몰', lat: 37.48724, lng: 126.98195 }];

    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();

    malls.forEach(({ label, name, lat, lng }) => {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        label,
        map,
      });
      bounds.extend(marker.position);

      marker.addListener('click', () => {
        map.panTo(marker.position);
        infoWindow.setContent(name);
        infoWindow.open({
          anchor: marker,
          map,
        });
      });
    });

    map.fitBounds(bounds);
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
        <div className="absolute left-0 top-0 z-[2] aspect-video w-full opacity-0" />

        <div id="map" style={{ height: '300px' }} />
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initMap`}
        ></Script>

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
