import { create } from 'zustand';

interface TokenState {
  fcmToken: string | null;
  setFcmToken: (fcmToken: string) => void;
}

const useTokenStore = create<TokenState>((set) => ({
  fcmToken: null as string | null,
  setFcmToken: (fcmToken: string) => set({ fcmToken }),
}));

export default useTokenStore;
