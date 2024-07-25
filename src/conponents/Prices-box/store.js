import create from 'zustand';

const useModelStore = create((set) => ({
  inViewModel: null,
  setInViewModel: (model) => set({ inViewModel: model }),
}));

export default useModelStore;