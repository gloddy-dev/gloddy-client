'use client';
import { useTranslation } from '@/app/i18n/client';
import { Divider } from '@/components/Divider';
import Link from 'next/link';

export default function LinkSection() {
  const { t } = useTranslation('profile.setting');

  return (
    <section className="text-subtitle-2">
      <div className="flex px-20 py-12">
        <span>{t('version')}</span>
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
