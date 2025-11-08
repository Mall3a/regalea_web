import { create } from "zustand";

interface UserDesiredGift {
  id: number;
  name: string;
  imageUrl: string | null;
  description?: string;
  link?: string | null;
  giftLevel?: number;
  category?: string;
  notes?: string | null;
}
/**
 * Response:

{
    "userName": "afr",
    "email": "email@email.com",
    "firstName": "andres",
    "lastName": "rodriguez",
    "userDesiredGifts": [
        {
            "id": 1,
            "name": "calcetines",
            "description": "para verano talla 39",
            "link": null,
            "imageUrl": null,
            "giftLevel": 1,
            "category": "Ropa y Calzado",
            "notes": null
        },
        {
            "id": 2,
            "name": "cafe juan baldez",
            "description": "cafe molido",
            "link": null,
            "imageUrl": null,
            "giftLevel": 2,
            "category": "Cocina y Gastronomía",
            "notes": null
        }
    ]
}
 */

interface User {
  id: number;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  sex?: string;
  birthDate?: string;
  avatar?: string;
  interests?: string[];
}
/**Response:

{
    "id": 1,
    "userName": "afr",
    "email": "email@email.com",
    "firstName": "andres",
    "lastName": "rodriguez",
    "phone": "123321",
    "sex": "MALE",
    "birthDate": "1990-04-11"
} */
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
