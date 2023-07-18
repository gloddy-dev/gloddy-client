import { create } from 'zustand';

import type { BirthdayValueType, GenderType, ImageType } from '@/types';

interface JoinState {
  phoneNumber: string;
  school: string;
  email: string;
  name: string;
  birth: BirthdayValueType;
  gender: GenderType | undefined;
  password: string; // 없어질 예정
  personalities: string[];
  profileImage: ImageType;
  setJoinValue: (values: Partial<JoinState>) => void;
  setJoinValueArray: (key: ValueStringArrayType, value: string[]) => void;
}

type ValueStringArrayType = 'personalities';

const useJoinStore = create<JoinState>((set) => ({
  phoneNumber: '',
  school: '',
  email: '',
  name: '',
  birth: {
    year: '',
    month: '',
    date: '',
  },
  gender: undefined,
  password: '', // 없어질 예정
  personalities: [''],
  profileImage: {
    imageFile: null,
    imageBlob: '',
  },
  setJoinValue: (values: Partial<JoinState>) => set((state) => ({ ...state, ...values })),
  setJoinValueArray: (key: ValueStringArrayType, value: string[]) =>
    set(() => ({ [key]: [...value] })),
}));

export default useJoinStore;
