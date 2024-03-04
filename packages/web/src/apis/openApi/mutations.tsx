import { useMutation } from '@tanstack/react-query';

import { Message } from '.';
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
    title?: string;
    content: string;
    targetLang: string;
  }) => {
    const userContent = title
      ? `Translate the following text to ${targetLang} and format the output as requested: { title: ${title}, content: ${content} }`
      : `Translate the following text to ${targetLang} and format the output as requested: { content: ${content} }`;

    const messages: Message[] = [
      {
        role: 'system',
        content:
          'You are a translator assistant that provides JSON output. Please ensure the translation output is in the format of {title: translated text, content: translated text} if title is provided, otherwise just {content: translated text}.',
      },
      {
        role: 'user',
        content: userContent,
      },
    ];
    return mutateAsync(messages);
  };

  return {
    postTranslate,
    isPending,
  };
};
