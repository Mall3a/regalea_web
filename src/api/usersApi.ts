import { api } from "./axiosInstance";

export async function getUser(userId: string) {
  const { data } = await api.get(`/users/${userId}`);
  return data;
}
