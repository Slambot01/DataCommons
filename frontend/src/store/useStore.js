import { create } from "zustand";

const useStore = create((set) => ({
  walletConnected: false,
  walletAddress: null,
  setWalletConnected: (connected) =>
    set({
      walletConnected: connected,
      walletAddress: connected ? "0x7a4f...3d2c" : null,
    }),

  sidebarOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  currentPage: "home",
  setCurrentPage: (page) => set({ currentPage: page }),

  selectedDataset: null,
  setSelectedDataset: (dataset) => set({ selectedDataset: dataset }),

  selectedProposal: null,
  setSelectedProposal: (proposal) => set({ selectedProposal: proposal }),
}));

export default useStore;
