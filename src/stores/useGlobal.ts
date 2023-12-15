import { create } from "zustand";

interface GlobalState {
  fullVideoSrc: string;
  isFullVideoShown: boolean;
  setFullVideo: (src: string) => void;
  openFullVideo: () => void;
  closeFullVideo: () => void;
  isCarDialogShown: boolean;
  openCarDialog: () => void;
  closeCarDialog: () => void;
}

export default create<GlobalState>((set) => ({
  fullVideoSrc: "",
  isFullVideoShown: false,
  setFullVideo: (src: string) => set({ fullVideoSrc: src }),
  openFullVideo: () => set({ isFullVideoShown: true }),
  closeFullVideo: () => set({ isFullVideoShown: false }),
  isCarDialogShown: false,
  openCarDialog: () => set({ isCarDialogShown: true }),
  closeCarDialog: () => set({ isCarDialogShown: false }),
}));
