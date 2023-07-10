import { create } from 'zustand';

interface JoinState {
  phoneNumber: string;
  birth: string;
  email: string;
  gender: string;
  name: string;
  password: string;
  personalities: string[];
  school: string;
  setJoinValue: (key: ValueStringType, value: string) => void;
  setJoinValueArray: (key: ValueStringArrayType, value: string[]) => void;
}

type ValueStringType =
  | 'phoneNumber'
  | 'birth'
  | 'email'
  | 'gender'
  | 'name'
  | 'password'
  | 'school';

type ValueStringArrayType = 'personalities';

const useJoin = create<JoinState>((set) => ({
  phoneNumber: '22',
  birth: '',
  email: '',
  gender: '',
  name: '',
  password: '',
  personalities: [''],
  school: '',
  setJoinValue: (key: ValueStringType, value: string) => set(() => ({ [key]: value })),
  setJoinValueArray: (key: ValueStringArrayType, value: string[]) =>
    set(() => ({ [key]: [...value] })),
}));

export default useJoin;
