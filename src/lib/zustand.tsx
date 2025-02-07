import { create } from "zustand";

interface TrackingState {
  trackedDriver: {
    id: string;
    name: string;
    adderss: string;
  } | null;
  setTrackedDriver: (driver: TrackingState["trackedDriver"]) => void;
}

export const useTrackingStore = create<TrackingState>((set) => ({
  trackedDriver: null,
  setTrackedDriver: (driver) => set({ trackedDriver: driver }),
}));
