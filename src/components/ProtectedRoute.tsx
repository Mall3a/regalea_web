import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  role?: string;
};

export default function ProtectedRoute({ children, role }: Props) {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (role && !user?.role.includes(role)) {
    return <Navigate to="/user" replace />;
  }

  return children;
}
