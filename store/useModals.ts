import { ModalNameType } from '@/app/grouping/create/type';
import { create } from 'zustand';

interface ModalState {
  modalName: ModalNameType | null;
  openModal: (modalName: ModalNameType) => void;
  closeModal: () => void;
}

const useModals = create<ModalState>((set) => ({
  modalName: null as ModalNameType | null,
  openModal: (modalName: ModalNameType) => set({ modalName }),
  closeModal: () => set({ modalName: null }),
}));

export default useModals;
