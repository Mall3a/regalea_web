import { Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function AppLayout() {
  const user = useAuthStore((s) => s.user);
  const isAdmin = user?.role.includes("ADMIN");

  return (
    <div className="min-h-screen flex bg-gray-50">
      {isAdmin && (
        <aside className="w-64 bg-gray-900 text-white p-4">
          <h2 className="text-lg font-bold mb-6">Admin</h2>
          <nav className="flex flex-col gap-3">
            <a href="/user">👤 Mi perfil</a>
            <a href="/admin/users">👥 Usuarios</a>
            <a href="/admin/logs">📜 Logs</a>
            <a href="/login">Log Out</a>
          </nav>
        </aside>
      )}

      <main className="flex-1 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
