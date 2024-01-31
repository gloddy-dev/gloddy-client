import { formatRelativeDate } from './util';

describe('formatRelativeDate', () => {
  context('시간이 24시간 이내인 경우', () => {
    it('시간이 2시간 전인 경우 "오늘"을 반환해야만 한다."', () => {
      const currentDateTwoHoursBefore = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
      expect(formatRelativeDate(currentDateTwoHoursBefore)).toBe('오늘');
    });
  });
  context('시간이 24시간 이내인 경우', () => {
    it('시간이 20시간 전인 경우 "오늘"을 반환해야만 한다."', () => {
      const currentDateTwoHoursBefore = new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString();
      expect(formatRelativeDate(currentDateTwoHoursBefore)).toBe('오늘');
    });
  });

  context('시간이 1일 전인 경우', () => {
    it('"1일 전"을 반환해야만 한다.', () => {
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      expect(formatRelativeDate(oneDayAgo)).toBe('1일 전');
    });
  });
  context('시간이 2일 전인 경우', () => {
    it('"2일 전"을 반환해야만 한다.', () => {
      const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString();
      expect(formatRelativeDate(twoDaysAgo)).toBe('2일 전');
    });
  });
  context('시간이 오늘 이후인 경우', () => {
    it('"날짜 이상"을 반환해야만 한다.', () => {
      const futureDate = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
      expect(formatRelativeDate(futureDate)).toBe('날짜 이상');
    });
  });
});
