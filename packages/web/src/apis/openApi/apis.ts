import { ChatCompletionMessageParam } from 'openai/resources';

export const postOpenAIAPI = async (messages: ChatCompletionMessageParam[]) => {
  const response = await fetch('/api/openai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });

  return response.json();
};
