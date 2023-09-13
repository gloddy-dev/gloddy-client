import NoShowModal from './NoShowModal.client';
import { convertShowMember } from '../../../util';
import { useFeedbackContext } from '../../components/FeedbackProvider.client';
import Membercard from '../../components/Membercard.client';
import TitleSection from '../../components/TitleSection';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { Tag } from '@/components/Tag';
import { useModal } from '@/hooks/useModal';

import type { EstimateResponse } from '@/apis/groups';

interface Step1Props {
  onNextClick: () => void;
  groupMemberList: EstimateResponse['groupMemberList'];
}

const tagList = ['calm', 'kind', 'active', 'witty'];

export default function Step1({ onNextClick, groupMemberList }: Step1Props) {
  const { t } = useTranslation('meeting');
  const { open, exit } = useModal();
  const { setValue, watch } = useFeedbackContext();
  const handleTag = (tag: string, userId: number) => {
    setValue(
      'praiseInfos',
      watch('praiseInfos')
        .filter((it) => it.userId !== userId)
        .concat({
          userId,
          praiseValue: tag,
        })
    );
  };
  const handleDeleteNoShow = (userId: number) => {
    const praiseInfos = watch('praiseInfos').filter((it) => it.userId !== userId);
    setValue('praiseInfos', [...praiseInfos, { userId, praiseValue: '불참' }]);

    exit();
  };

  const showMemberList = convertShowMember(watch('praiseInfos'), groupMemberList);

  return (
    <div>
      <TitleSection message={t('evaluation.howWasGroup')} step={1} />

      <Divider thickness="thick" />
      {showMemberList.map((member) => (
        <div key={member.userId} className="px-20">
          <Spacing size={16} />
          <Membercard member={member}>
            <Membercard.Right>
              <Icon
                id="24-delete"
                onClick={() =>
                  open(() => (
                    <NoShowModal
                      onOkClick={() => handleDeleteNoShow(member.userId)}
                      name={member.nickName}
                      imageUrl={member.imageUrl}
                      onCancelClick={exit}
                    />
                  ))
                }
              />
            </Membercard.Right>
          </Membercard>
          <Spacing size={8} />
          <Flex>
            {tagList.map((tag, index) => (
              <Tag
                key={index}
                className="mr-4"
                id={tag}
                onSelected={() => handleTag(tag, member.userId)}
                isSelected={
                  watch('praiseInfos').find((it) => it.userId === member.userId)?.praiseValue ===
                  tag
                }
              >
                {t(`evaluation.traits.${tag}`)}
              </Tag>
            ))}
          </Flex>
          <Spacing size={20} />
          <Divider />
        </div>
      ))}
      <ButtonGroup>
        <Button
          onClick={onNextClick}
          disabled={watch('praiseInfos').length < groupMemberList.length}
        >
          다음
        </Button>
      </ButtonGroup>
    </div>
  );
}
