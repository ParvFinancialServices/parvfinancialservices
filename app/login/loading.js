import { Skeleton } from "@/components/ui/skeleton";

export default function LoginSkeleton() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left side image skeleton */}
      <div className="relative hidden bg-muted lg:block">
        <Skeleton className="absolute inset-0 h-full w-full" />
      </div>

      {/* Right side login form skeleton */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-10 w-full rounded-md" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-10 w-full rounded-md" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
