'use client';

import Calendar from '@/components/common/Calendar';
import React, { useState } from 'react';

const CreateMeeting = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <div className="w-400">
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
};

export default CreateMeeting;
