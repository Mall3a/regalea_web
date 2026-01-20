import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useLogin } from "../hooks/useLogin";

export default function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const {
    mutate: loginRequest,
    data,
    isPending,
    isError,
    error,
    isSuccess,
  } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Completa todos los campos");
      return;
    }

    setMessage("");
    loginRequest({ email, passwordHash: password });
  };

  useEffect(() => {
    if (isSuccess && data) {
      login(data);
      if (data.role === "ADMIN") {
        navigate("/admin/dashboard");
        return;
      } else {
        navigate("/user");
      }
    }
  }, [data, isSuccess, login, navigate]);

  useEffect(() => {
    if (isError) {
      setMessage(
        error instanceof Error ? error.message : "Credenciales inválidas", // esta tirando la api error 500 cuando las credenciales no son validas
      );
    }
  }, [isError, error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">🎁 Regalea</h1>

        {message && <p className="text-red-500 mb-4">{message}</p>}

        <input
          className="w-full mb-3 p-2 border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />

        <input
          className="w-full mb-4 p-2 border rounded"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-black py-2 rounded disabled:opacity-50"
        >
          {isPending ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}
