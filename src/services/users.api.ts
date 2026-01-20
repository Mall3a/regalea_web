import { MOCK_USERS, removeMockUser } from "../mocks/users.mock";
import type { User } from "../types/user.types";
import { api } from "./axiosInstance";

export async function getUser(userId: string) {
  const { data } = await api.get(`/users/${userId}`);
  return data;
}

export async function logIn(loginUserRequest: {
  email: string;
  passwordHash: string;
}) {
  const { data } = await api.post("/users/login", loginUserRequest);
  return data;
}

// Datos simulados
// simula latencia real
const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function getUsers(): Promise<User[]> {
  await sleep(800);
  return MOCK_USERS;
}

export async function deleteUser(id: number): Promise<void> {
  removeMockUser(id);
  await sleep(500);
}
