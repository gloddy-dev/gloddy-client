'use client';

import { useJoinContext } from '../../../components/JoinContext.client';
import { formatDate } from '../util';
import { useSignUpMutation } from '@/apis/auth';
import { Button, ButtonGroup } from '@/components/Button';
import { Tag } from '@/components/Tag';
import { personalityList } from '@/constants/personalityList';
import { setTokenAtCookie } from '@/utils/auth/tokenController';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import type { SignUpState } from '../../../type';
import type { GenderType } from '@/types';

export default function InputForm() {
  const { handleSubmit, watch } = useJoinContext();
  const { mutate: mutateSignUp } = useSignUpMutation();
  const router = useRouter();

  const onSubmit = async (data: SignUpState) => {
    const { verifyEmailNumber, verifyNumber, birth, personalityIdList, gender, ...rest } = data;
    const signUpRequest = {
      ...rest,
      birth: formatDate(birth),
      personalities: personalityIdList.map((id) => personalityList[id].keywordInEnglish),
      gender: (gender === '남성' ? 'MAIL' : 'FEMAIL') as GenderType,
    };
    // FIXME: gender타입 변환 필요x
    mutateSignUp(signUpRequest, {
      onSuccess: (data) => {
        const {
          token: { accessToken, refreshToken },
          userId,
        } = data;
        setTokenAtCookie({
          accessToken,
          refreshToken,
          userId,
        });
        router.push('/grouping');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalitySection />
      <ButtonGroup>
        <Button disabled={watch('personalityIdList').length === 0} type="submit">
          완료
        </Button>
      </ButtonGroup>
    </form>
  );
}

function PersonalitySection() {
  const { watch, setValue } = useJoinContext();

  const handleSelectedClick = useCallback(
    (id: number) => {
      const list = watch('personalityIdList');
      if (list.includes(id)) {
        list.filter((personalityId: number) => personalityId !== id);
      }
      setValue('personalityIdList', [...list, id]);
    },
    [setValue, watch]
  );

  return (
    <section className="flex flex-wrap gap-12">
      {personalityList.map((tag) => (
        <Tag
          key={tag.id}
          id={tag.id}
          isSelected={watch('personalityIdList').includes(tag.id)}
          onSelected={handleSelectedClick}
        >
          {tag.keyword}
        </Tag>
      ))}
    </section>
  );
}
