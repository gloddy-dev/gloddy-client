import TitleSection from './TitleSection';
import { EstimateResponse } from '@/apis/groups';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';
import { Flex } from '@/components/Layout';
import { TextFieldController } from '@/components/TextField';
import { DUMMY_DATA_ESTIMATE } from '@/constants/dummyData';
import { useForm } from 'react-hook-form';

export default function Step3() {
  return (
    <div>
      <TitleSection message={`최고의 짝꿍으로\n선정한 이유는 무엇인가요?`} step={3} />
      <Divider thickness="thick" />
      <Spacing size={16} />
      <MemberCard member={DUMMY_DATA_ESTIMATE.groupMemberList[0]} />

      <ButtonGroup>
        <Button>완료</Button>
      </ButtonGroup>
    </div>
  );
}

interface MemberCardProps {
  member: EstimateResponse['groupMemberList'][0];
}

function MemberCard({ member }: MemberCardProps) {
  const { imageUrl, name } = member;
  const hookForm = useForm({ defaultValues: { feedback: '' } });
  const { register } = hookForm;
  return (
    <section className="px-20">
      <Flex align="center">
        <Avatar size="medium" imageUrl={imageUrl} />
        <Spacing size={12} direction="horizontal" />
        <div className="flex grow flex-col justify-center">
          <p className="text-paragraph-1">{name}</p>
          <p className="text-caption text-sign-tertiary">{name}</p>
        </div>
      </Flex>
      <Spacing size={8} />
      <TextFieldController
        as="textarea"
        hookForm={hookForm}
        register={register('feedback')}
        placeholder="최고의 짝꿍에게 후기를 남겨주세요."
        maxCount={100}
      />
    </section>
  );
}
