interface Props {
  label: string;
}

export function InterestTag({ label }: Props) {
  return (
    <span
      className="
        inline-flex items-center
        border border-gray-300
        bg-gray-100
        text-gray-800
        px-3 py-1 rounded-full
        text-sm font-medium
        shadow-sm
        hover:bg-gray-200
        transition-colors
      "
    >
      {label}
    </span>
  );
}
