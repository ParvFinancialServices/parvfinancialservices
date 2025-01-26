import { create } from "zustand";

export const useAdminState = create((set) => ({
  loanNumber: 0,
  setLoanNumber: (value) => set((state) => ({ ...state, loanNumber: value })),
}));
