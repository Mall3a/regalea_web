import type { User } from "../types/user.types";
import { Pencil, Trash2 } from "lucide-react";

type Props = {
  users: User[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  isDeleting?: boolean;
};

export function UsersTable({ users, onEdit, onDelete, isDeleting }: Props) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100 text-left text-gray-700">
          <tr>
            <th className="px-4 py-3 font-medium">ID</th>
            <th className="px-4 py-3 font-medium">Nombre</th>
            <th className="px-4 py-3 font-medium">Email</th>
            <th className="px-4 py-3 font-medium text-right">Acciones</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3">{user.id}</td>

              <td className="px-4 py-3 font-medium text-gray-900">
                {user.firstName} {user.lastName}
              </td>

              <td className="px-4 py-3 text-gray-600">{user.email}</td>

              <td className="px-4 py-3">
                <div className="flex justify-end gap-3">
                  <button
                    aria-label={`Editar usuario ${user.firstName} ${user.lastName}`}
                    className="text-blue-600 hover:text-blue-800 transition"
                    onClick={() => onEdit(user.id)}
                  >
                    <Pencil size={16} />
                    Editar
                  </button>

                  <button
                    aria-label={`Eliminar usuario ${user.firstName} ${user.lastName}`}
                    className="text-red-600 hover:text-red-800 transition"
                    onClick={() => {
                      if (
                        confirm(
                          `¿Eliminar a ${user.firstName} ${user.lastName}?`,
                        )
                      ) {
                        onDelete(user.id);
                      }
                    }}
                    disabled={isDeleting}
                  >
                    <Trash2 size={16} />
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {/* Estado vacío */}
          {users.length === 0 && (
            <tr>
              <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                No hay usuarios registrados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
