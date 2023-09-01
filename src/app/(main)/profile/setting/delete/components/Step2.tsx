import DeleteModal from './DeleteModal.client';
import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/common/Checkbox';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { useModal } from '@/hooks/useModal';

const infoList = [
  '참여를 원하는 모임이 없어요',
  '원하는 모임 인원을 찾기가 어려워요',
  '앱 이용이 불편해요',
  '비매너 회원을 만났어요',
  '개인 정보에 대한 유출이 우려돼요',
  '매칭이 잘 진행되지 않아요',
  '기타',
];

export default function Step2() {
  const { open, close } = useModal();
  const handleDeleteClick = () => {};
  return (
    <div>
      <Spacing size={32} />
      <h3 className="px-20 text-h3">탈퇴하시려는 이유가 무엇인가요?</h3>
      <Spacing size={8} />
      <div className="px-20 text-subtitle-2 text-sign-tertiary">
        <p>서비스 이용에 불편한 점이 있으셨나요?</p>
        <p>보내주신 의견을 꼭 개선할 수 있도록 노력하겠습니다.</p>
      </div>
      <Spacing size={16} />
      <div className="px-20">
        {infoList.map((info, index) => (
          <Flex key={index} className="py-12">
            <CircleCheckbox />
            <Spacing size={8} direction="horizontal" />
            <p className="text-subtitle-2 text-sign-secondary">{info}</p>
          </Flex>
        ))}
      </div>
      <ButtonGroup>
        <Button
          onClick={() => open(<DeleteModal onCancelClick={close} onOkClick={handleDeleteClick} />)}
        >
          탈퇴하기
        </Button>
      </ButtonGroup>
    </div>
  );
}
