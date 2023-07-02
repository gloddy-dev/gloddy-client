'use client';

import Calendar from '@/components/common/Calendar';
// import Input from '@/components/common/Input/Input';
// import TextArea from '@/components/common/Input/TextArea';
import React, { useState } from 'react';

const CreateMeeting = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <div className="">
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {/* <Input placeholder="제목을 입력해주세요" />
      <TextArea placeholder="내용을 입력해주세요" /> */}
    </div>
  );
};

export default CreateMeeting;
