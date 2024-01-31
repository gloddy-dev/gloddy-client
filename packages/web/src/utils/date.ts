export const currentKoreaTime = new Date(Date.now() + 9 * 60 * 60 * 1000);
export const currentTime = new Date();
export const day1 = 1000 * 60 * 60 * 24;
export const day60 = day1 * 60;
export const afterDay1 = new Date(currentTime.getTime() + day1);
export const afterDay60 = new Date(currentTime.getTime() + day60);
