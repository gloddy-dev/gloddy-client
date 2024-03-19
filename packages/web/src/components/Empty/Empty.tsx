import { serverTranslation } from '@/app/i18n';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';

interface NoMeetingProps {
  ns: string;
  lng: string;
  message: string;
}
export default async function Empty({ lng, ns, message }: NoMeetingProps) {
  const { t } = await serverTranslation(lng, ns);

  return (
    <Flex direction="column" className="py-80 text-center" align="center">
      <Icon id="48-cancel" width={48} height={48} />
      <Spacing size={8} />
      <p className="text-subtitle-1 text-sign-tertiary">{t(message)}</p>
    </Flex>
  );
}
