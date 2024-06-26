'use client';

import { format } from 'date-fns';
import dynamic from 'next/dynamic';

import type { CreateGroupContextValue } from '../type';
import type { TimeType } from '@/types';
import type { SubmitHandler } from 'react-hook-form';

import { usePostCreateGroup } from '@/apis/groups';
import { LayerLoading } from '@/components/Loading';
import { useFunnel } from '@/hooks/useFunnel';

const MainStep = dynamic(() => import('./main/MainStep.client'));
const MeetDateStep = dynamic(() => import('./meetDate/MeetDateStep'));
const CreateHeader = dynamic(() => import('../components/CreateHeader'));

function formatTime(time: TimeType) {
  time.fromHour =
    time.fromAmPm === 'AM' ? time.fromHour : ((Number(time.fromHour) + 12) % 24).toString();

  return time.fromHour.padStart(2, '0') + ':' + time.fromMin.padStart(2, '0');
}

export default function CreateFunnel() {
  const { Funnel, currentStep, setStep, prevStep } = useFunnel(['main', 'meetDate']);
  const { mutate: mutateCreateGroup, status } = usePostCreateGroup();

  const handleCreateSubmit: SubmitHandler<CreateGroupContextValue> = (data) => {
    mutateCreateGroup({
      placeId: data.place.id,
      placeName: data.place.name,
      placeAddress: data.place.address,
      placeLatitude: data.place.latitude,
      placeLongitude: data.place.longitude,
      content: data.content,
      maxUser: data.maxUser,
      meetDate: format(data.meetDate, 'yyyy-MM-dd'),
      title: data.title,
      imageUrl: data.imageUrl,
      startTime: formatTime(data.time),
    });
  };

  return (
    <>
      <CreateHeader currentStep={currentStep} />
      <Funnel>
        <Funnel.Step name="main">
          <MainStep
            onCreateSubmit={handleCreateSubmit}
            onSelectMeetDate={() => setStep('meetDate')}
          />
        </Funnel.Step>
        <Funnel.Step name="meetDate">
          <MeetDateStep onDone={prevStep} />
        </Funnel.Step>
      </Funnel>
      <LayerLoading isPending={status === 'pending' || status === 'success'} />
    </>
  );
}
