import { create } from "zustand";

interface Gift {
  id: number;
  name: string;
  image: string;
}

interface User {
  name: string;
  avatar: string;
  interests: string[];
  gifts: Gift[];
}

interface UserState {
  user: User;
}

export const useUserStore = create<UserState>(() => ({
  user: {
    name: "Constanza Mallea",
    avatar: "https://i.pravatar.cc/150?img=3",
    interests: ["Arte", "Nail Art", "Pintura", "React", "Maquillaje"],
    gifts: [
      {
        id: 1,
        name: "Set de pinceles profesionales",
        image: "https://picsum.photos/seed/pinceles/150",
      },
      {
        id: 2,
        name: "Lámpara LED para uñas",
        image: "https://picsum.photos/seed/lampara/150",
      },
      {
        id: 3,
        name: "Agenda minimalista 2025",
        image: "https://picsum.photos/seed/agenda/150",
      },
    ],
  },
}));
