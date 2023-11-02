import { getLocalCookie, setLocalCookie } from '@/utils/cookieController';
import { getMobileDivce } from '@/utils/getMobileDevice';

export function useCheckUpdate(version: number) {
  const cookies = getLocalCookie('didUpdated_' + version);
  const mobileDevice = getMobileDivce();

  if (cookies === 'true') return false;
  else if (confirm('새로운 업데이트가 있습니다. 업데이트를 진행하시겠습니까?')) {
    setLocalCookie('didUpdated_' + version, 'true', {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    });
    if (mobileDevice === 'android')
      window.location.href = 'https://play.google.com/store/apps/details?id=com.goodcode.gloddy';
    else window.location.href = 'https://apps.apple.com/kr/app/gloddy/id6463738953';
  } else {
    alert('업데이트를 진행하지 않으면 서비스 이용이 불가능합니다.');
  }
}
