'use client';

import { postCreateGroup } from '@/apis/groups';
import { Button } from '@/components/Button';

export default function page() {
  return (
    <div>
      <Button
        onClick={() =>
          postCreateGroup({
            content: 'setsetsetset',
            imageUrl:
              'https://gloddy.s3.ap-northeast-2.amazonaws.com/file/eebb9660-216f-491c-902b-367dd5cc27be.JPG',
            maxUser: 3,
            meetDate: '2023-12-10',
            placeAddress: '서울특별시',
            placeId: 'ChIJZTibxAqlfDURIeavJisLdqo',
            placeLatitude: 37.5131008,
            placeLongitude: 127.1034334,
            placeName: '송파구 올림픽로 300',
            startTime: '23:33',
            title: 'testset',
          })
        }
      >
        모임 개설
      </Button>
    </div>
  );
}
