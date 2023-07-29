import { redirect } from 'next/navigation';

export default function Home() {
  redirect('join?step=1');
  return <main></main>;
}
