export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`skeleton ${className}`} aria-hidden />;
}

export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/85 p-6 shadow-sm">
      <Skeleton className="h-32 w-full rounded-xl" />
      <Skeleton className="mt-4 h-4 w-3/4" />
      <Skeleton className="mt-2 h-3 w-1/2" />
      <Skeleton className="mt-4 h-12 w-full" />
    </div>
  );
}
