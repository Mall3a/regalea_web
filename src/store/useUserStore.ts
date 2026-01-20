import { create } from "zustand";
import type { User, UserDesiredGift } from "../types/user.types";

interface UserState {
  user: User | null;
  userDesiredGifts: UserDesiredGift[];
  setUser: (user: User) => void;
  setUserDesiredGifts: (gifts: UserDesiredGift[]) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  userDesiredGifts: [],
  setUser: (user) => set({ user }),
  setUserDesiredGifts: (gifts) => set({ userDesiredGifts: gifts }),
}));
