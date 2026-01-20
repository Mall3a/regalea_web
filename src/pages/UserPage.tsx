import { useEffect } from "react";
import { useUserStore } from "../store/useUserStore";
import { InterestTag } from "../components/InterestTag";
import { GiftCard } from "../components/GiftCard";
import { useUser } from "../hooks/useUser";
import { useUserDesiredGifts } from "../hooks/useUserDesiredGifts";
import { useAuthStore } from "../store/useAuthStore";

export default function UserPage() {
  const authUser = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const userId = authUser?.id?.toString() ?? "";

  const { user, userDesiredGifts, setUser, setUserDesiredGifts } =
    useUserStore();

  const {
    data: userData,
    isLoading: loadingUser,
    error: errorUser,
  } = useUser(userId);

  const {
    data: giftsData,
    isLoading: loadingGifts,
    error: errorGifts,
  } = useUserDesiredGifts(userId);

  useEffect(() => {
    if (userData) setUser(userData);
  }, [userData, setUser]);

  useEffect(() => {
    if (giftsData?.userDesiredGifts) {
      setUserDesiredGifts(giftsData.userDesiredGifts); // MOCK_USER_DESIRED_GIFTS
    }
  }, [giftsData, setUserDesiredGifts]);

  if (loadingUser || loadingGifts) return <p>Cargando...</p>;
  if (errorUser || errorGifts) return <p>Error al cargar datos</p>;
  if (!user) return null;

  const isOwner = user.userName === userData?.userName;

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center gap-8">
      {/* Perfil */}
      <a href="/login" onClick={() => logout()}>
        Log Out
      </a>

      <div className="flex flex-col items-center">
        <img
          src={user.avatar ?? "https://i.pravatar.cc/150"}
          alt={user.userName}
          className="w-32 h-32 rounded-full shadow-lg"
        />
        <h1 className="text-2xl font-bold mt-4">
          {user.firstName} {user.lastName}
        </h1>
      </div>

      {/* Intereses */}
      <section className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">Intereses</h2>
        <div className="flex flex-wrap gap-2">
          {(user.interests?.length
            ? user.interests
            : ["Arte", "React", "Nail Art"]
          ).map((interest) => (
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
            {userDesiredGifts.map((gift) => (
              <GiftCard
                key={gift.id}
                name={gift.name}
                description={gift.description}
                category={gift.category}
                // notes={gift.notes}
                // link={gift.link}
                giftLevel={gift.giftLevel}
                image={gift.imageUrl ?? "https://picsum.photos/seed/agenda/150"}
                canAssign={!isOwner}
                // isAssigned={false}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
