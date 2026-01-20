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

export async function getUsers() {
  const { data } = await api.get(`/users`);
  return data;
}
