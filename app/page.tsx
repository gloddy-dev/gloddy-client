import { redirect } from 'next/navigation';

export default function Home() {
  redirect('join/step1');
  return <main></main>;
}
