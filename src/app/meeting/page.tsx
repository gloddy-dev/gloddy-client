import ContentSection from './components/ContentSection.client';
import { Header } from '@/components/Header';
import React from 'react';

const Meeting = () => {
  return (
    <div>
      <Header>
        <Header.Left>
          <div className="flex gap-16 px-20">
            <p>참여 모임</p>
            <p className="text-sign-sub">찜한 그룹</p>
          </div>
        </Header.Left>
      </Header>
      <ContentSection />
    </div>
  );
};

export default Meeting;
