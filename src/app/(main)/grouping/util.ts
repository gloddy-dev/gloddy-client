export function formatDate(input: string): string {
  const day = input.split(' ')[1];
  const month = input.split(' ')[0].substr(5, 2);
  const date = input.split(' ')[0].substr(8, 2);
  return `${month}.${date} ${day}`;
}
