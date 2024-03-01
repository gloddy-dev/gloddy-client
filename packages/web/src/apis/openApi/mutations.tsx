import { useMutation } from '@tanstack/react-query';
import { ChatCompletionMessageParam } from 'openai/resources';

import { postOpenAIAPI } from './apis';

export const usePostTranslateGPT = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: postOpenAIAPI,
  });

  const postTranslate = async ({
    title,
    content,
    targetLang,
  }: {
    title: string;
    content: string;
    targetLang: string;
  }) => {
    const messages: ChatCompletionMessageParam[] = [
      { role: 'system', content: 'You are a translator assistant that provides JSON output.' },
      {
        role: 'user',
        content: `Translate the following text to ${targetLang}: title: ${title}, content: ${content}`,
      },
    ];

    return mutateAsync(messages);
  };

  return {
    postTranslate,
    isPending,
  };
};
