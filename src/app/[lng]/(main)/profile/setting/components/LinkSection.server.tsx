import { serverTranslation } from '@/app/i18n';
import { Divider } from '@/components/Divider';
import Link from 'next/link';

interface LinkSectionProps {
  lng: string;
}

export default async function LinkSection({ lng }: LinkSectionProps) {
  const { t } = await serverTranslation(lng, 'profile');

  return (
    <section className="text-subtitle-2">
      <div className="flex px-20 py-12">
        <span>{t('settings.version')}</span>
        <span className="ml-auto text-caption text-sign-caption">1.0.0v</span>
      </div>
      <div className="px-20 py-12">
        <Link href="/profile/setting/service">{t('settings.termsOfService')}</Link>
      </div>
      <div className="px-20 py-12">
        <Link href="/profile/setting/information">{t('settings.customerService')}</Link>
      </div>
      <Divider thickness="thick" />
      <div className="px-20 py-12 ">
        <Link href="/profile/setting/delete">{t('settings.deleteAccount')}</Link>
      </div>
    </section>
  );
}
