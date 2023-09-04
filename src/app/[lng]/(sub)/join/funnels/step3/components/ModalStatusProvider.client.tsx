import { createContext } from 'react';

export const context = createContext<{
  status: string;
} | null>(null);

export default function ModalStatusProvider() {}
