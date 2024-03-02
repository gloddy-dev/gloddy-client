export type RoleType = 'system' | 'user' | 'assistant' | 'tool' | 'function';

export interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: Usage;
  system_fingerprint: string;
}

export interface Choice {
  index: number;
  message: Message;
  logprobs: null | any;
  finish_reason: string;
}

export interface Message {
  role: RoleType;
  content: string;
}

export interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}
