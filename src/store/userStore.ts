import { create } from 'zustand';
import { User, Location } from '../types';

interface UserState {
  user: User | null;
  location: Location | null;
  setUser: (user: User) => void;
  setLocation: (location: Location) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  location: null,
  setUser: (user) => set({ user }),
  setLocation: (location) => set({ location }),
  logout: () => set({ user: null, location: null }),
}));