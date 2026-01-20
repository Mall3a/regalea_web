import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsersTable } from "../components/UsersTable";
import type { User } from "../types/user.types";
import { mockUsers } from "../mocks/mockUsers";

export default function UsersPage() {
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>(mockUsers);

  const ROUTES = {
    USERS_CREATE: "/admin/users/create", //"/admin/users/create"
    USERS_EDIT: (userId: number) => `/admin/users/edit/${userId}`, //`/admin/users/edit/${userId}`
  };

  const handleEdit = (userId: number) => {
    console.log("Editar usuario con ID:", userId);
    // lógica para abrir un modal o redirigir a una página de edición
    // la logica consiste en: navegar a la pagina de edicion con el id del usuario
    // Usando useNavigate de react-router-dom
    navigate(ROUTES.USERS_EDIT(userId));

    // para redirigir al componente UserEditPage:
    // la asociacion de la ruta al componente se hace en el main.tsx
  };

  const handleDelete = (userId: number) => {
    // Lógica para eliminar usuario
    console.log("Eliminar usuario con ID:", userId);
    // la logica consiste en: filtrar el usuario eliminado de la lista y actualizar el estado
    setUsers(users.filter((user) => user.id !== userId));
    // Pero como es un mock, solo mostramos el mensaje en consola
  };

  const handleAddUser = () => {
    navigate(ROUTES.USERS_CREATE);
    // se agrega la ruta en el main.tsx
    // el componente se llama UserCreatePage
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 flex flex-col gap-6">
      {/* Header del módulo */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Gestión de usuarios</h1>
          <p className="text-gray-600">
            Bienvenida/o al panel de administración de usuarios
          </p>
        </div>

        <button
          onClick={handleAddUser}
          className="
            bg-blue-600 hover:bg-blue-700 transition
            text-white px-4 py-2 rounded-lg shadow
          "
        >
          + Agregar usuario
        </button>
      </div>

      {/* Tabla */}
      <UsersTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
