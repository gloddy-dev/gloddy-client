import { serverTranslation } from '@/app/i18n';
import { Divider } from '@/components/Divider';
import { NavLink } from '@/components/NavLink';

interface LinkSectionProps {
  lng: string;
}

export default async function LinkSection({ lng }: LinkSectionProps) {
  const { t } = await serverTranslation(lng, 'profile');

  return (
    <section className="text-subtitle-2">
      <div className="flex px-20 py-12">
        <span>{t('settings.version')}</span>
        <span className="text-caption text-sign-caption ml-auto">1.0.0v</span>
      </div>
      <div className="px-20 py-12">
        <NavLink href="/profile/setting/service">{t('settings.termsOfService')}</NavLink>
      </div>
      <div className="px-20 py-12">
        <NavLink href="/profile/setting/information">{t('settings.customerService')}</NavLink>
      </div>
      <div className="px-20 py-12">
        <NavLink href="/profile/setting/langauge">{t('settings.changeLanguage')}</NavLink>
      </div>
      <Divider thickness="thick" />
      <div className="px-20 py-12 ">
        <NavLink href="/profile/setting/delete">{t('settings.deleteAccount')}</NavLink>
      </div>
    </section>
  );
}
