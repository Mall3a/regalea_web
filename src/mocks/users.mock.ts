import type { User } from "../types/user.types";

// mock lista de usuarios
export let MOCK_USERS: User[] = [
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

export function getMockUsers() {
  return MOCK_USERS;
}

export function removeMockUser(id: number) {
  MOCK_USERS = MOCK_USERS.filter((u) => u.id !== id);
}
