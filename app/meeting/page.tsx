'use client';
import PageTransition from '@/components/common/PageTransition';
import React from 'react';

type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

const Meeting = (props: IndexPageProps, ref: IndexPageRef) => {
  return (
    <PageTransition ref={ref} isStartLeft={false}>
      <div>Meeting</div>
    </PageTransition>
  );
};

export default Meeting;
