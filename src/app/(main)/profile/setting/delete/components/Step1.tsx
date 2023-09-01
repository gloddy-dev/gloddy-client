import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/common/Checkbox';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { TextList } from '@/components/TextList';
import { useRouter } from 'next/navigation';

interface Step1Props {
  onNextClick: () => void;
}
const infoList = [
  `지금까지 진행했던 모임에서 받은\n모든 칭찬 내역이 사라집니다`,
  `지금까지 진행했던 모임에서 받은 다른 회원의\n'최고의 짝꿍'  후기 내용이 사라집니다`,
  `회원 탈퇴시 개인 프로필 내 신뢰도 지표\n데이터가 사라지며 다시 복구할 수 없습니다.`,
  `회원 탈퇴시 모임 활동을 진행했던\n모든 데이터가 삭제되며 복구할 수 없습니다.`,
];

export default function Step1({ onNextClick }: Step1Props) {
  const router = useRouter();
  return (
    <div>
      <Spacing size={32} />
      <h3 className="px-20 text-h3">정말 탈퇴하시겠어요?</h3>
      <Spacing size={16} />
      <div className="px-20">
        {infoList.map((info, index) => (
          <TextList key={index}>{info}</TextList>
        ))}
      </div>

      <Spacing size={32} />

      <Flex className="px-20">
        <CircleCheckbox checked />
        <Spacing size={8} direction="horizontal" />
        <p className="text-subtitle-2 text-sign-secondary">
          위 내용을 확인하였으며, 이에 동의합니다.
        </p>
      </Flex>

      <ButtonGroup>
        <Button onClick={onNextClick}>다음</Button>
      </ButtonGroup>
    </div>
  );
}
