import type { User } from "../types/user.types";

// mock lista de usuarios
export const mockUsers: User[] = [
  {
    id: 1,
    userName: "JuanP",
    firstName: "Juan",
    lastName: "Pérez",
    email: "juan.perez@example.com",
    phone: "555-1234",
    sex: "MALE",
    birthDate: "1985-07-20",
    role: "admin",
  },
  {
    id: 2,
    userName: "MariaG",
    firstName: "María",
    lastName: "Gómez",
    email: "maria.gomez@example.com",
    phone: "555-1234",
    sex: "MALE",
    birthDate: "1985-07-20",
    role: "user",
  },
  {
    id: 3,
    userName: "CarlosL",
    firstName: "Carlos",
    lastName: "López",
    email: "carlos.lopez@example.com",
    phone: "555-1234",
    sex: "MALE",
    birthDate: "1985-07-20",
    role: "user",
  },
];
