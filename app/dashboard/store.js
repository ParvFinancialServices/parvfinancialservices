import { create } from "zustand";

export const useAdminState = create((set) => ({
  loanNumber: 0,
  profile: {},
  setLoanNumber: (value) => set((state) => ({ ...state, loanNumber: value })),
  setProfile: (value) => set((state) => ({ ...state, profile: value })),
}));
