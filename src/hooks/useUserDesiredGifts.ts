import { useQuery } from "@tanstack/react-query";
import { api } from "../services/axiosInstance";

export const useUserDesiredGifts = (userId: string) => {
  return useQuery({
    queryKey: ["userDesiredGifts", userId],
    queryFn: async () => {
      const { data } = await api.get(`/gifts/desired-gifts/user/${userId}`);
      return data;
    },
  });
};
