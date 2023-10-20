import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  // set actually merges state, and we can skip the ...state part
  setUser: (user) => set(() => ({ user: user })),
}));
export default useStore;
