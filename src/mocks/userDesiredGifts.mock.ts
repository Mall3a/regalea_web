import type { UserDesiredGift } from "../types/user.types";
// mock regalos deseados de usuarios

export const MOCK_USER_DESIRED_GIFTS: UserDesiredGift[] = [
  {
    id: 1,
    name: "calcetines",
    description: "para verano talla 39",
    link: null,
    imageUrl: null,
    giftLevel: 1,
    category: "Ropa y Calzado",
    notes: null,
  },
  {
    id: 2,
    name: "cafe juan baldez",
    description: "cafe molido",
    link: null,
    imageUrl: null,
    giftLevel: 2,
    category: "Cocina y Gastronomía",
    notes: null,
  },
];
