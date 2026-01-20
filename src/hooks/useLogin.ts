import { useMutation } from "@tanstack/react-query";
import { logIn } from "../services/users.api";

type LoginInput = {
  email: string;
  passwordHash: string;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async ({ email, passwordHash }: LoginInput) => {
      return await logIn({ email, passwordHash });
    },
  });
};
