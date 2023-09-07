'use client';
import { Avatar } from '@/components/Avatar';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { StrictPropsWithChildren } from '@/types';
import { Fragment, PropsWithChildren } from 'react';

import type { EstimateResponse } from '@/apis/groups';

interface MembercardProps {
  member: EstimateResponse['groupMemberList'][0];
}

export default function Membercard({ member, children }: PropsWithChildren<MembercardProps>) {
  const { imageUrl, isCaptain, nickName, reliabilityLevel, userId } = member;
  return (
    <Flex align="center" className="py-4">
      <Avatar size="medium" imageUrl={imageUrl}>
        <Icon id="24-education" className="absolute -right-2 -top-2" />
      </Avatar>
      <Spacing size={12} direction="horizontal" />
      <Flex direction="column" justify="center" className="grow">
        <Flex align="center">
          <p className="text-paragraph-1">{nickName}</p>
          {isCaptain && (
            <Fragment>
              <Spacing size={2} direction="horizontal" />
              <Icon id="16-host" />
            </Fragment>
          )}
        </Flex>

        <Flex align="center">
          <Icon id={`16-reliability-${reliabilityLevel.toLowerCase()}`} width={16} height={16} />
          <Spacing size={2} direction="horizontal" />
          <p className="text-caption text-sign-tertiary">{reliabilityLevel}</p>
        </Flex>
      </Flex>
      {children}
    </Flex>
  );
}

function Right({ children }: StrictPropsWithChildren) {
  return (
    <Flex align="center" className="ml-auto justify-self-end text-subtitle-1">
      {children}
    </Flex>
  );
}

Membercard.Right = Right;
