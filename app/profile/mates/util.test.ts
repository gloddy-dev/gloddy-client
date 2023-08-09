import { formatRelativeDate } from './util';

describe('formatRelativeDate', () => {
  context('날짜가 오늘인 경우', () => {
    it('"오늘"을 반환한다', () => {
      const todayDate = '2023-08-09T01:59:40.535Z';
      const result = formatRelativeDate(todayDate);
      expect(result).toBe('오늘');
    });
  });
});
