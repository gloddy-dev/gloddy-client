'use client';

import { useJoinContext } from '../../JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { SignUpRequest, useSMSMutation, useSMSVerifyMutation } from '@/apis/auth';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { regexr } from '@/constants/regexr';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

export default function InputForm() {
  return (
    <div>
      <Spacing size={18} />
    </div>
  );
}
