interface Props {
  name: string;
  image: string;
  canAssign?: boolean;
  assigned?: boolean;
  onToggleAssign?: () => void;
}

export function GiftCard({
  name,
  image,
  canAssign,
  assigned,
  onToggleAssign,
}: Props) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md p-3 w-44 flex flex-col items-center hover:scale-[1.02] transition-transform">
      {canAssign && (
        <input
          type="checkbox"
          checked={assigned}
          onChange={onToggleAssign}
          className="absolute top-3 right-3 w-4 h-4 accent-pink-500 cursor-pointer"
        />
      )}

      <img
        src={image}
        alt={name}
        className="rounded-xl mb-2 w-full h-32 object-cover"
      />
      <p className="text-gray-800 font-medium text-sm">{name}</p>
    </div>
  );
}
