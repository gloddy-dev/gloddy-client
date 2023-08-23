'use client';
import { useGetProfile } from '@/apis/profile';

export default function IntroduceSection() {
  const { data: profileData } = useGetProfile();

  const { introduce } = profileData;

  return (
    <section className="px-20 py-40">
      <p className="px-4 text-subtitle-3 text-sign-secondary">자기소개</p>
      <p className="min-h-144 rounded-8 bg-divider p-16 text-paragraph-2">{introduce}안녕하세요</p>
    </section>
  );
}
