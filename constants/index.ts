export const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=services,clusterer`;
export const IS_PRODUCTION = process.env.NEXT_PUBLIC_APP_ENV === 'production';
export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
export const INSTAGRAM_URL = 'https://www.instagram.com/gloddykorea';