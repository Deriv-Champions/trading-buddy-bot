import { create } from "zustand";

interface SelectedCohort {
  id: string;
  title: string;
  type: string;
}

interface BookingStore {
  isOpen: boolean;
  selectedCohort: SelectedCohort | null;
  openBooking: (cohort?: SelectedCohort) => void;
  closeBooking: () => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  isOpen: false,
  selectedCohort: null,
  openBooking: (cohort?: SelectedCohort) =>
    set({ isOpen: true, selectedCohort: cohort || null }),
  closeBooking: () => set({ isOpen: false, selectedCohort: null }),
}));
