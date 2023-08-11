import { create } from 'zustand';

interface ModalState {
  modalName: string | null;
  openModal: (modalName: string) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  modalName: null as string | null,
  openModal: (modalName: string) => set({ modalName }),
  closeModal: () => set({ modalName: null }),
}));

export default useModalStore;
