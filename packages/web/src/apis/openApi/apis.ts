import axios from 'axios';

import { Message } from '.';

export const postOpenAIAPI = async (messages: Message[]) => {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      messages,
      model: 'gpt-3.5-turbo',
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_API}`,
      },
    }
  );

  return JSON.parse(response.data.choices[0].message.content);
};
