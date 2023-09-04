import LinkSection from './components/LinkSection.server';
import ProfileSection from './components/ProfileSection.client';
import SettingHeader from './components/SettingHeader';

export default function page() {
  return (
    <>
      <SettingHeader />
      <ProfileSection />
      <LinkSection />
    </>
  );
}
