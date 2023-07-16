import { create } from 'zustand';

interface JoinState {
  phoneNumber: string;
  school: string;
  email: string;
  name: string;
  birth: string;
  gender: string;
  password: string; // 없어질 예정
  personalities: string[];
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
  birth: '',
  gender: '',
  password: '', // 없어질 예정
  personalities: [''],
  setJoinValue: (values: Partial<JoinState>) => set((state) => ({ ...state, ...values })),
  setJoinValueArray: (key: ValueStringArrayType, value: string[]) =>
    set(() => ({ [key]: [...value] })),
}));

export default useJoinStore;
