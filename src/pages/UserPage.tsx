import { useUserStore } from "../store/useUserStore";
import { InterestTag } from "../components/InterestTag";
import { GiftCard } from "../components/GiftCard";

export default function UserPage() {
  const { user } = useUserStore();

  // 🧍 Simula si el visitante es la dueña (en el futuro, vendrá del contexto de autenticación)
  const isOwner = user.name === "Andres Rodriguez";

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center gap-8">
      {/* Perfil */}
      <div className="flex flex-col items-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-32 h-32 rounded-full shadow-lg"
        />
        <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
      </div>

      {/* Intereses */}
      <section className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">Intereses</h2>
        <div className="flex flex-wrap gap-2">
          {user.interests.map((interest) => (
            <InterestTag key={interest} label={interest} />
          ))}
        </div>
      </section>

      {/* Lista de regalos */}
      <section className="w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">
          Lista de regalos
        </h2>

        <div className="max-h-[400px] overflow-y-auto pr-2">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 justify-center">
            {user.gifts.map((gift) => (
              <GiftCard
                key={gift.id}
                name={gift.name}
                image={gift.image}
                canAssign={!isOwner}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
