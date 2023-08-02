export const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=services,clusterer`;
export const IS_PRODUCTION = process.env.NEXT_PUBLIC_APP_ENV === 'production';
export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
export const BASE_WEB_URL = process.env.NEXT_PUBLIC_BASE_WEB_URL ?? 'http://localhost:3000';
export const INSTAGRAM_URL = 'https://www.instagram.com/gloddykorea';

export const DAY_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
export const isServer = typeof window === undefined;
