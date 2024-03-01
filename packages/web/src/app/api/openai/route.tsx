import OpenAI from 'openai';

export async function POST(req: Request) {
  const json = await req.json();
  const { messages } = json;

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPEN_API,
  });

  const chatCompletion = await openai.chat.completions.create({
    messages,
    model: 'gpt-3.5-turbo',
    temperature: 0,
  });

  return new Response(chatCompletion.choices[0].message.content);
}
