import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function RequireRole({ role }: { role: string }) {
  const user = useAuthStore((s) => s.user);

  if (!user?.role.includes(role)) {
    return <Navigate to="/user" replace />;
  }

  return <Outlet />;
}
