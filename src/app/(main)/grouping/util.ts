export function formatDate(input: string) {
  const parts = input.split(' ');
  const dateParts = parts[0].split('-');

  const day = parts[1].toUpperCase() as string;

  return `${dateParts[2]}.${dateParts[1]} ${day} 12:00AM`;
}
