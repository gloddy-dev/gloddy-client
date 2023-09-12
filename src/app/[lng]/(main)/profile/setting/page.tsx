import LinkSection from './components/LinkSection.server';
import ProfileSection from './components/ProfileSection.client';
import SettingHeader from './components/SettingHeader';
import { PageAnimation } from '@/components/PageAnimation';

export default function page() {
  return (
    <>
      <SettingHeader />
      <PageAnimation>
        <ProfileSection />
        <LinkSection />
      </PageAnimation>
    </>
  );
}
