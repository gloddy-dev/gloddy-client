import Input from '@/components/common/Input/Input';
import TextArea from '@/components/common/Input/TextArea';
import React from 'react';

const CreateMeeting = () => {
  return (
    <div className="">
      <Input placeholder="제목을 입력해주세요" />
      <TextArea placeholder="내용을 입력해주세요" />
    </div>
  );
};

export default CreateMeeting;
