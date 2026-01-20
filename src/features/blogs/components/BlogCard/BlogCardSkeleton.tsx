import { Skeleton } from "@/components/ui/skeleton";

const BlogCardSkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="aspect-16/10 w-full rounded-xl" />
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-6 w-full" />
      <div className="flex gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
