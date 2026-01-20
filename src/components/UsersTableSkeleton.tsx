export function UsersTableSkeleton() {
  return (
    <div className="rounded-lg border bg-white p-4">
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-6 w-full animate-pulse rounded bg-gray-200"
          />
        ))}
      </div>
    </div>
  );
}
