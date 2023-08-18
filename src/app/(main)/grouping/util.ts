export function formatDate(input: string): string {
  const [datePart, timePart] = input.split(' ');
  const [month, day, weekday] = datePart.split('.');
  const [time, ampm] = timePart.split(/(AM|PM)/);
  return `${month}.${day} ${weekday} ${time}${ampm}`;
}
