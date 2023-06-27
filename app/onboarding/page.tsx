'use client';
import OnboardingSpeechBubble from '@/components/SpeechBubble/OnboardingSpeechBubble';
import { PageIndicator, Swiper } from 'antd-mobile';
import Image from 'next/image';

const onboardingMessgaeList = [`또 홍대야? 너무 먼데..`, `모임 시간 지났는데, \n 왜 아직 안 오지?`];

export default function Onboarding() {
  return (
    <div className="h-full flex items-center">
      <Swiper
        indicator={(total, current) => (
          <PageIndicator
            total={total}
            current={current}
            style={{
              '--dot-color': '#eaeaea',
              '--active-dot-color': 'blue',
              '--dot-size': '8px',
              '--active-dot-size': '22px',
              '--dot-border-radius': '50%',
              '--active-dot-border-radius': '15px',
              '--dot-spacing': '8px',
            }}
            className="flex justify-center h-8"
          />
        )}
      >
        {onboardingMessgaeList.map((message: string, index: number) => (
          <Swiper.Item key={index}>
            <div className="w-full flex flex-col items-center ">
              <OnboardingSpeechBubble text={message} />
              <Image
                src={`/assets/onboarding${index + 1}.svg`}
                width={200}
                height={200}
                alt="character"
              />
              <div className="text-center font-700 my-80 text-xl">
                <p>나와 가까운 외국인 친구들과</p>
                <p>모임을 즐겨보세요!</p>
              </div>
            </div>
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  );
}
