export function getMobileDivce() {
  if (typeof window === 'undefined') return 'other';
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('android') > -1) return 'android';
  if (
    userAgent.indexOf('iphone') > -1 ||
    userAgent.indexOf('ipad') > -1 ||
    userAgent.indexOf('ipod') > -1
  )
    return 'ios';
  else return 'other';
}
