import type { User } from "../types/user.types";

type Props = {
  users: User[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export function UsersTable({ users, onEdit, onDelete }: Props) {
  return (
    <table className="min-w-full bg-white border border-gray-200 mt-4">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-200">ID</th>
          <th className="py-2 px-4 border-b border-gray-200">Nombre</th>
          <th className="py-2 px-4 border-b border-gray-200">Email</th>
          <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="py-2 px-4 border-b border-gray-200">{user.id}</td>
            <td className="py-2 px-4 border-b border-gray-200">
              {user.firstName} {user.lastName}
            </td>
            <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
            <td className="py-2 px-4 border-b border-gray-200">
              <button
                aria-label={`Editar usuario ${user.firstName} ${user.lastName}`}
                className="text-blue-500 hover:underline mr-2"
                onClick={() => onEdit(user.id)}
              >
                Editar
              </button>
              <button
                className="text-red-500 hover:underline"
                onClick={() => onDelete(user.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
