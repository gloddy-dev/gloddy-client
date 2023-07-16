import { BirthdayValueType, ImageType } from '@/types';
import { create } from 'zustand';

interface JoinState {
  phoneNumber: string;
  school: string;
  email: string;
  name: string;
  birth: BirthdayValueType;
  gender: string;
  password: string; // 없어질 예정
  personalities: string[];
  profileImage: ImageType;
  setJoinValue: (values: Partial<JoinState>) => void;
  setJoinValueArray: (key: ValueStringArrayType, value: string[]) => void;
}

type ValueStringType =
  | 'phoneNumber'
  | 'birth'
  | 'email'
  | 'gender'
  | 'name'
  | 'password'
  | 'school'
  | 'nickname';

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
  gender: '',
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
