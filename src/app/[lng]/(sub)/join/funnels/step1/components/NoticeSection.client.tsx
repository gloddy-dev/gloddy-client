'use client';
import { useTranslation } from '@/app/i18n/client';
import { Spacing } from '@/components/Spacing';
import { TextList } from '@/components/TextList';

export default function NoticeSection() {
  const { t } = useTranslation('join');
  return (
    <section>
      <TextList variant="caption">{t('phoneSafe')}</TextList>
      <Spacing size={8} />
      <TextList variant="caption">{t('phoneNotShared')}</TextList>
    </section>
  );
}
